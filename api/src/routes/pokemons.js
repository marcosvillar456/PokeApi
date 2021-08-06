const { Router } = require("express");
const router = Router();
const { getpokemonsApi } = require("../Servicios/funciones");
const { Pokemon, Type } = require("../db");
const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
router.get("/", async (req, res) => {
  const { name } = req.query;
  const dbpokemons = await Pokemon.findAll({ include: Type }).then(
    (pokemon) => {
      return pokemon;
    }
  );

  const pokemonsApi = await getpokemonsApi();
  const allPokemons = pokemonsApi.concat(dbpokemons);

  if (name) {
    const Search = allPokemons.find((obj) => obj.name == name.toLowerCase());
    if (Search) {
      return res.json(Search);
    } else {
      res.send("error");
    }
  } else {
    return res.json(allPokemons);
  }
});

router.get("/:idPokemon", async (req, res) => {
  let id = req.params.idPokemon;
  if (id.length < 6) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((respuesta) => respuesta.json())
      .then((pokemon) => {
        return res.json({
          name: pokemon.name,
          id: pokemon.id,
          img: pokemon.sprites.front_default,
          life: pokemon.stats[0].base_stat,
          force: pokemon.stats[1].base_stat,
          defending: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
          types: pokemon.types.map((info) => {
            return info.type.name;
          }),
        });
      });
  } else {
    const findDb = await Pokemon.findByPk(id, {
      include: Type,
    });
    if (findDb) {
      return res.json(findDb);
    } else {
      return res.send("Error de servidor");
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
  return res.send(UploadPokemon);
});

module.exports = router;
