import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pokemons_types, All_Pokemons } from "../../redux/actions";
import "./types.scss";

export default function Types() {
  const dispatch = useDispatch();

  const Types = useSelector((state) => state.types);
  const handleChangeSelect = async (e) => {
    //tuve que hacer esto para que no surga el bug de que el estado sea los pokemons filtrados
    if (e.target.value === "all") {
      return dispatch(All_Pokemons());
    } else {
      return dispatch(Pokemons_types(e.target.value));
    }
  };

  return (
    <Fragment>
      Type
      <select onChange={handleChangeSelect} defaultValue={"Buscar por"}>
        <option value="Buscar por" disabled>
          Select type
        </option>
        <option value="all">all</option>
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
