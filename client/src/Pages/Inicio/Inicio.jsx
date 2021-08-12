import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getpokemons, get_types } from "../../redux/actions/index";
import "./Inicio.scss";
export default function Inicio() {
  const dispatch = useDispatch();

  useEffect(() => {
    function GetPokemonsAndTypes() {
      dispatch(get_types());
      dispatch(getpokemons());
    }
    GetPokemonsAndTypes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className="Bienvenido">
        <p className="Title">Bienvenido</p>
        <button>
          <Link to="/home">Inicio</Link>
        </button>
      </div>
    </Fragment>
  );
}
