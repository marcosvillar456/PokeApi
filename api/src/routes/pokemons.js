const { Router } = require("express");
const router = Router();
const { getpokemonsApi } = require("../Servicios/funciones");
const { Pokemon, Type } = require("../db");
const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const { type, name } = req.query;
  const filtrados = [];
  const dbpokemons = await Pokemon.findAll({ include: Type }).then(
    (pokemon) => {
      return pokemon;
    }
  );

  const allPokemons = await getpokemonsApi().then((res) => {
    return res.concat(dbpokemons);
  });

  if (type) {
    allPokemons.map((obj) =>
      obj.types.map((typos) => {
        if (typos.name === type) {
          return filtrados.push(obj);
        }
      })
    );
    return res.status(200).send(filtrados);
  } else if (name) {
    const Search = allPokemons.filter((obj) => obj.name == name.toLowerCase());
    return Search[0] ? res.send(Search[0]) : res.send("Error");
  }
  return res.send(allPokemons);
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
          ImgDefrente: pokemon.sprites.front_default,

          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          special_attack: pokemon.stats[3].base_stat,
          special_defense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
          types: pokemon.types.map((info) => info.type.name),
          height: pokemon.height,
          weight: pokemon.weight,
        });
      });
  } else {
    await Pokemon.findAll({ include: Type })
      .then((pokemon) => pokemon.filter((obj) => obj.id === id))
      .then((dato) => {
        return dato[0] ? res.status(200).json(dato) : res.send("error");
      })
      .catch(() => {
        return res.send("Error de servidor");
      });
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
