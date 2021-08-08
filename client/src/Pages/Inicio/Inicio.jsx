import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getpokemons, get_types } from "../../redux/actions/index";
import "./Inicio.scss";
function Inicio(props) {
  useEffect(() => {
    async function GetPokemonsAndTypes() {
      await props.getpokemons();
      await props.get_types();
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
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  types: state.types,
});
export default connect(mapStateToProps, { getpokemons, get_types })(Inicio);
