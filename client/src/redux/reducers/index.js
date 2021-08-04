import { GETPOKEMONS, SEARCHPOKEMON, FILTERPOKEMONS } from "../actions/index";

const initialState = {
  pokemons: [],
  pokemonSearch: [],
  pokemonFilter: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETPOKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case SEARCHPOKEMON:
      return {
        pokemonSearch: action.payload,
      };

    case FILTERPOKEMONS:
      return {
        ...state,
        pokemonFilter: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
