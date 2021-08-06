import {
  GETPOKEMONS,
  FILTERPOKEMONS,
  SEARCHPOKEMONNAME,
  SEARCHPOKEMONID,
  GETTYPES,
  ORDERALPHABETICALLY,
} from "../actions/index";

const initialState = {
  pokemons: [],
  pokemonSearch: [],
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETPOKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case SEARCHPOKEMONNAME:
      return { ...state, pokemonSearch: action.payload };

    case SEARCHPOKEMONID:
      return { ...state, pokemonSearch: action.payload };

    case GETTYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FILTERPOKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ORDERALPHABETICALLY:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
