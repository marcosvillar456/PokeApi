const { Router } = require("express");
const router = Router();
const { getpokemonsApi } = require("../Controllers/funciones");
const { Pokemon, Type } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    const dbpokemons = await Pokemon.findAll({ include: Type });
    const pokemonsApi = await getpokemonsApi();
    const allPokemons = pokemonsApi.concat(dbpokemons);
    if (name) {
      const Search = allPokemons.find((obj) => obj.name == name.toLowerCase());
      if (Search) {
        return res.json(Search);
      } else {
        return res.send("error");
      }
    } else {
      return res.json(allPokemons);
    }
  } catch (err) {
    return next(err);
  }
});

router.get("/:idPokemon", async (req, res, next) => {
  let id = req.params.idPokemon;
  try {
    if (id.length < 6) {
      const peticion = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const Data = peticion.data;
      const Pokemons = {
        name: Data.name,
        id: Data.id,
        img: Data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
        life: Data.stats[0].base_stat,
        force: Data.stats[1].base_stat,
        defending: Data.stats[2].base_stat,
        speed: Data.stats[5].base_stat,
        types: Data.types.map((info) => {
          return { name: info.type.name };
        }),
      };
      return res.send(Pokemons);
    } else {
      const findDb = await Pokemon.findByPk(id, {
        include: Type,
      });
      if (findDb) {
        return res.json(findDb);
      } else {
        return res.send("No se Encontro el pokemon");
      }
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const id = uuidv4();
    let data = { ...req.body };
    const { name, life, force, defending, speed, heigth, weight, type1, img } =
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
      img,
    });
    await UploadPokemon.addTypes(type1);
    return res.send(UploadPokemon);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
