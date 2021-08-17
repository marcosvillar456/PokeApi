import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import "./types.scss";

export default function Types({ SetPokemons, setPaginaActual }) {
  const pokemons = useSelector((state) => state.pokemons);
  const Types = useSelector((state) => state.types);
  const handleChangeSelect = async (e) => {
    //tuve que hacer esto para que no surga el bug de que el estado sea los pokemons filtrados

    SetPokemons(pokemons);
    let pokemonsFiltrados = [];

    if (e.target.value === "all") {
      setPaginaActual(1);
      return SetPokemons(pokemons);
    } else {
      await pokemons.map((pokemon) =>
        pokemon.types.forEach((type) => {
          if (type.name === e.target.value) {
            return pokemonsFiltrados.push(pokemon);
          }
        })
      );
      setPaginaActual(1);
      return SetPokemons(pokemonsFiltrados);
    }
  };

  return (
    <Fragment>
      Type
      <select onChange={handleChangeSelect} defaultValue={"Buscar por"}>
        <option value="Buscar por" disabled>
          Select type
        </option>
        <option>all</option>
        {Types?.map((type) => {
          return (
            <option className={`button ${type}`} key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Fragment>
  );
}
