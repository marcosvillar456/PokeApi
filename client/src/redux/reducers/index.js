import {
  GETPOKEMONS,
  FILTERPOKEMONS,
  SEARCHPOKEMONNAME,
  SEARCHPOKEMONID,
  GETTYPES,
} from "../actions/index";

const initialState = {
  pokemons: [],
  pokemonsType: [],
  pokemonSearch: {},
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
        pokemonsType: action.payload,
      };

    default:
      return state;
  }
}
export default rootReducer;
