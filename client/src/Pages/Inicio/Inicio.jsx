import React, { useEffect } from "react";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getpokemons, get_types } from "../../redux/actions/index";

function Inicio(props) {
  useEffect(async () => {
    async function GetPokemonsAndTypes() {
      await props.getpokemons();
      await props.get_types();
    }
    await GetPokemonsAndTypes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Fragment>
      <h1>Bienvenido</h1>
      <Link to="/home">Inicio</Link>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  types: state.types,
});
export default connect(mapStateToProps, { getpokemons, get_types })(Inicio);
