const { Router } = require("express");
const router = Router();
const { getpokemonsApi } = require("../Servicios/funciones");
const { Pokemon, Type } = require("../db");
const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const { type } = req.query;
  const { name } = req.query;
  const dbpokemons = await Pokemon.findAll({ include: Type }).then(
    (pokemon) => {
      return pokemon;
    }
  );
  const apiPokemons = await getpokemonsApi();
  const allPokemons = apiPokemons.concat(dbpokemons);
  console.log(req.query);
  if (type) {
    const filtrados = [];
    allPokemons.map((obj) =>
      obj.types.map((typos) => {
        if (typos.name === type) {
          return filtrados.push(obj);
        }
      })
    );
    res.status(200).send(filtrados);
  } else if (name) {
    const Search = allPokemons.filter((obj) => obj.name == name);
    res.send(Search);
  }
  return res.send("Error al buscar");
});

router.get("/:idPokemon", async (req, res) => {
  const id = req.params.idPokemon;
  if (id) {
    if (id.length < 6) {
      const SearchPokemonById = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )
        .then((res) => res.json())
        .then((res) => res);
      res.send(SearchPokemonById);
    } else {
      const dbPokemons = await Pokemon.findAll({ include: Type }).then(
        (pokemon) => {
          return pokemon;
        }
      );
      const SearchInDb = dbPokemons.filter((obj) => obj.id === id);
      res.send(SearchInDb);
    }
  }
});

router.post("/", async (req, res) => {
  const id = uuidv4();
  let data = { ...req.body };
  const { name, life, force, defending, speed, heigth, weight, type1, img_DB } =
    data;
  const UploadPokemon = await Pokemon.create({
    id,
    name,
    life,
    force,
    defending,
    speed,
    heigth,
    weight,
    img_DB,
  });
  await UploadPokemon.addTypes(type1);
  res.send(UploadPokemon);
});

module.exports = router;
