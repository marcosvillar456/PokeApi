const fetch = require("node-fetch");
const axios = require("axios");

const getpokemonsApi = async () => {
  try {
    //pido a la url los pokemons
    let datos = [];
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200`)
      .then((res) => res.json())
      .then((res) => res);
    //mapeo y hago peticion a la url que me dio la anterior peticion para obtener mas datos aparte del nombre
    const promise = pokemons.results.map(async (pokemon) => {
      return await fetch(`${pokemon.url}`).then((res) => res.json());
    });

    const resultado = await Promise.all(promise);
    resultado.map((pokemon) =>
      datos.push({
        id: pokemon.id,
        name: pokemon.name,
        force: pokemon.stats[1].base_stat,
        types: pokemon.types.map((info) => {
          return { name: info.type.name };
        }),
        img: pokemon.sprites.front_default,
      })
    );
    return datos;
  } catch {
    console.log("error");
  }
};

const getTypes = async () => {
  const types = [];
  const typesPokemon = await fetch(`https://pokeapi.co/api/v2/type/`)
    .then((res) => res.json())
    .then((res) => res.results);
  typesPokemon.map((obj) => types.push({ name: obj.name }));
  return types;
};

const SearchPokemonById = async (id) => {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((res) => res);
};

module.exports = { getpokemonsApi, getTypes, SearchPokemonById };
