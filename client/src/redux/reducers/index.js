import {
  GETPOKEMONS,
  FILTERPOKEMONS,
  SEARCHPOKEMONNAME,
  SEARCHPOKEMONID,
} from "../actions/index";

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

    case SEARCHPOKEMONNAME:
      return {
        pokemonSearch: action.payload,
      };

    case SEARCHPOKEMONID:
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
