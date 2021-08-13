import {
  GETPOKEMONS,
  FILTERPOKEMONS,
  SEARCHPOKEMONNAME,
  SEARCHPOKEMONID,
  GETTYPES,
  ORDER_A_Z,
  ORDER_Z_A,
  HIGH_TO_LOW,
  UPLOADPOKEMONS,
  LOW_TO_HIGH,
  OUR_POKEMONS,
  POKEMONSTYPES,
  ALL,
} from "../actions/index";

const initialState = {
  pokemons: [],
  pokemons2: [],
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
        pokemons2: action.payload,
      };

    case SEARCHPOKEMONNAME:
      return {
        ...state,
        pokemonSearch: action.payload,
      };

    case SEARCHPOKEMONID:
      return {
        ...state,
        pokemonSearch: action.payload,
      };

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

    case UPLOADPOKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case ORDER_A_Z:
      let A_Z = [...state.pokemons].sort(function (a, b) {
        let n = a.name
          .toLocaleLowerCase()
          .localeCompare(b.name.toLocaleLowerCase());
        return n;
      });
      return {
        ...state,
        pokemons: A_Z,
      };

    case ORDER_Z_A:
      let Z_A = [...state.pokemons].sort(function (a, b) {
        let n = b.name
          .toLocaleLowerCase()
          .localeCompare(a.name.toLocaleLowerCase());
        return n;
      });
      return {
        ...state,
        pokemons: Z_A,
      };

    case HIGH_TO_LOW:
      let High_To_Low_Force = [...state.pokemons].sort((a, b) =>
        a.force < b.force ? 1 : a.force > b.force ? -1 : 0
      );
      return {
        ...state,
        pokemons: High_To_Low_Force,
      };

    case LOW_TO_HIGH:
      let Low_To_High_Force = [...state.pokemons].sort((a, b) =>
        a.force > b.force ? 1 : a.force < b.force ? -1 : 0
      );
      return {
        ...state,
        pokemons: Low_To_High_Force,
      };

    case OUR_POKEMONS:
      let Our_Pokemons = [...state.pokemons].filter((pokemon) => {
        return pokemon.id.length !== undefined;
      });
      return {
        ...state,
        pokemons: Our_Pokemons,
      };

    case POKEMONSTYPES:
      let filtrados = [];
      [...state.pokemons2].map((pokemon) =>
        pokemon.types.forEach((type) => {
          if (type.name === action.payload) {
            return filtrados.push(pokemon);
          }
        })
      );
      return {
        ...state,
        pokemons: filtrados,
      };

    case ALL:
      return {
        ...state,
        pokemons: state.pokemons2,
      };

    default:
      return state;
  }
}
export default rootReducer;
