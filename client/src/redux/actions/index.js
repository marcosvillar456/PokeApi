import axios from "axios";
export const ORDER_A_Z = "ORDER_A_Z";
export const ORDER_Z_A = "ORDER_Z_A";
export const GETPOKEMONS = "GETPOKEMONS";
export const FILTERPOKEMONS = "FILTERPOKEMONS";
export const SEARCHPOKEMONNAME = "SEARCHPOKEMONNAME";
export const SEARCHPOKEMONID = "SEARCHPOKEMONID";
export const GETTYPES = "GETTYPES";
export const UPLOADPOKEMONS = "UPLOADPOKEMONS";
export const HIGH_TO_LOW = "HIGH_TO_LOW";
export const LOW_TO_HIGH = "LOW_TO_HIGH";
export const OUR_POKEMONS = "OUR_POKEMONS";
export const POKEMONSTYPES = "POKEMONSTYPES";
export const ALL = "ALL";

export function getpokemons() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/pokemons");
    const json = await response.data;
    return dispatch({ type: GETPOKEMONS, payload: json });
  };
}

export function getPokemonByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const json = await response.data;
    return dispatch({ type: SEARCHPOKEMONNAME, payload: json });
  };
}
export function getPokemonById(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const json = await response.data;
    return dispatch({ type: SEARCHPOKEMONID, payload: json });
  };
}

export function get_types() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/type");
    const json = await response.data;
    return dispatch({ type: GETTYPES, payload: json });
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
    return dispatch({ type: FILTERPOKEMONS, payload: filtrados });
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
  img
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
      img,
    };
    const send = { ...body, type1: [type1, type2] };
    await axios.post("http://localhost:3001/pokemons", send);
    const get = await axios.get("http://localhost:3001/pokemons");
    const json = await get.data;

    return dispatch({ type: UPLOADPOKEMONS, payload: json });
  };
}

export function A_Z() {
  return async function (dispatch) {
    return dispatch({ type: ORDER_A_Z });
  };
}

export function Z_A() {
  return async function (dispatch) {
    return dispatch({ type: ORDER_Z_A });
  };
}

export function Our_Pokemons() {
  return async function (dispatch) {
    return dispatch({ type: OUR_POKEMONS });
  };
}

export function High_To_Low() {
  return async function (dispatch) {
    return dispatch({ type: HIGH_TO_LOW });
  };
}

export function Low_To_High() {
  return async function (dispatch) {
    return dispatch({ type: LOW_TO_HIGH });
  };
}

export function Pokemons_types(type) {
  return async function (dispatch) {
    return dispatch({ type: POKEMONSTYPES, payload: type });
  };
}

export function All_Pokemons() {
  return async function (dispatch) {
    return dispatch({ type: ALL });
  };
}
