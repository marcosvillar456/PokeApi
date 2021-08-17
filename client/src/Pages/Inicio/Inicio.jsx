import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const pokemonsEstado = useSelector((state) => state.pokemons);

  if (!pokemonsEstado[2]) {
    return (
      <Fragment>
        <div className="Bienvenido">
          <div>
            <p className="Title">Bienvenido</p>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs "
              width="100px"
              alt="pokemon  "
            />
            <h1>Loading...</h1>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="Bienvenido">
          <div>
            <p className="Title">Bienvenido</p>
            <button>
              <Link to="/home">Ingresar</Link>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
