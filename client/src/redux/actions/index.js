import axios from "axios";

export const GETPOKEMONS = "GETPOKEMONS";
export const FILTERPOKEMONS = "FILTERPOKEMONS";
export const SEARCHPOKEMONNAME = "SEARCHPOKEMONNAME";
export const SEARCHPOKEMONID = "SEARCHPOKEMONID";
export const GETTYPES = "GETTYPES";
export const UPLOADPOKEMONS = "UPLOADPOKEMONS";

export function getpokemons() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/pokemons");
    const json = await response.data;
    dispatch({ type: GETPOKEMONS, payload: json });
  };
}

export function getPokemonByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const json = await response.data;

    dispatch({ type: SEARCHPOKEMONNAME, payload: json });
  };
}
export function getPokemonById(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const json = await response.data;
    dispatch({ type: SEARCHPOKEMONID, payload: json });
  };
}

export function get_types() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/type");
    const json = await response.data;
    dispatch({ type: GETTYPES, payload: json });
  };
}

export function filterPokemons(type, pokemons) {
  return async function (dispatch) {
    const filtrados = [];
    await pokemons.map((obj) =>
      obj.types.map((name) => {
        return name === type ? filtrados.push(obj) : "";
      })
    );
    dispatch({ type: FILTERPOKEMONS, payload: filtrados });
  };
}
export function UploadPokemon(
  name,

  life,
  force,
  defending,
  speed,
  heigth,
  weight,
  type1,
  type2,
  img_DB
) {
  return async function (dispatch) {
    const body = {
      name,
      life,
      force,
      defending,
      speed,
      heigth,
      weight,
      img_DB,
    };
    const send = { ...body, type1: [type1, type2] };
    const peticion = await axios.post("http://localhost:3001/pokemons", send);
    const data = peticion;
    dispatch({ type: UPLOADPOKEMONS, payload: data });
  };
}
