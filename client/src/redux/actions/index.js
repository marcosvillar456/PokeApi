export const GETPOKEMONS = "GETPOKEMONS";
export const FILTERPOKEMONS = "FILTERPOKEMONS";
export const SEARCHPOKEMONNAME = "SEARCHPOKEMONNAME";
export const SEARCHPOKEMONID = "SEARCHPOKEMONID";
export const GETTYPES = "GETTYPES";
export const ORDERALPHABETICALLY = "ORDERALPHABETICALLY";

export function getpokemons() {
  return async function (dispatch) {
    const response = await fetch("http://localhost:3001/pokemons");
    const json = await response.json();
    dispatch({ type: GETPOKEMONS, payload: json });
  };
}

export function getPokemonByName(name) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/pokemons?name=${name}`);
    const json = await response.json();
    dispatch({ type: SEARCHPOKEMONNAME, payload: json });
  };
}
export function getPokemonById(id) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/pokemons/${id}`);
    const json = await response.json();
    dispatch({ type: SEARCHPOKEMONID, payload: json });
  };
}

export function get_types() {
  return async function (dispatch) {
    const response = await fetch("http://localhost:3001/type");
    const json = await response.json();
    dispatch({ type: GETTYPES, payload: json });
  };
}

export function filterPokemons(type) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/pokemons?type=${type}`);
    const json = await response.json();
    dispatch({ type: FILTERPOKEMONS, payload: json });
  };
}

export function order_alphabetically(pokemons) {
  return async function (dispatch) {
    const ordenado = await pokemons.sort((a, b) => {
      return a.force - b.force;
    });
    dispatch({ type: ORDERALPHABETICALLY, payload: ordenado });
  };
}
