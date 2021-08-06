import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  filterPokemons,
  getpokemons,
  order_alphabetically,
} from "../../redux/actions/index";
import "./types.scss";

function Types(props) {
  const handleChangeSelect = async (e) => {
    props.filterPokemons(e.target.value);
  };

  function ordenar() {
    props.pokemons.sort((a, b) => {
      return a.force - b.force;
    });
  }
  return (
    <Fragment>
      <h1>Filter by</h1>
      <div className="container_types">
        Type
        <select className="Types" required onChange={handleChangeSelect}>
          <option defaultValue disabled>
            Buscar por
          </option>
          {props.types.map((type) => {
            return (
              <option className={`button ${type}`} key={type} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        <button onClick={() => props.getpokemons()}>All Pokemons</button>
        <button onClick={() => ordenar()}>da</button>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  types: state.types,
  pokemons: state.pokemons,
});
export default connect(mapStateToProps, {
  filterPokemons,
  getpokemons,
  order_alphabetically,
})(Types);
