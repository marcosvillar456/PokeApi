export const GETPOKEMONS = "GETPOKEMONS";
export const SEARCHPOKEMON = "SEARCHPOKEMON";
export const FILTERPOKEMONS = "FILTERPOKEMONS";

export function getpokemons() {
  return async function (dispatch) {
    const response = await fetch("http://localhost:3001/pokemons");
    const json = await response.json();
    dispatch({ type: GETPOKEMONS, payload: json });
  };
}

export function getPokemonByIdOrName(id) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/pokemons?name=${id}`);
    const json = await response.json();
    dispatch({ type: SEARCHPOKEMON, payload: json });
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
