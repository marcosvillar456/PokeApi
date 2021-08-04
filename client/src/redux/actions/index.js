export const GETPOKEMONS = "GETPOKEMONS";
export const FILTERPOKEMONS = "FILTERPOKEMONS";
export const SEARCHPOKEMONNAME = "SEARCHPOKEMONNAME";
export const SEARCHPOKEMONID = " SEARCHPOKEMONID";

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

export function filterPokemons(type) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/pokemons/filter?type=${type}`
    );
    const json = await response.json();
    dispatch({ type: FILTERPOKEMONS, payload: json });
  };
}
