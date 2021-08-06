import React, { Fragment } from "react";
import { connect } from "react-redux";
import { filterPokemons, getpokemons } from "../../redux/actions/index";
import "./types.scss";

function Types(props) {
  const handleChangeSelect = async (e) => {
    props.filterPokemons(e.target.value, props.Pokemons);
    props.SetPokemons(props.pokemonsType);
  };

  return (
    <Fragment>
      <h1>Filter by</h1>
      Type
      <select
        className="Types"
        onChange={handleChangeSelect}
        defaultValue={"Buscar por"}
      >
        <option value="Buscar por" disabled>
          Select type
        </option>
        {props.types.map((type) => {
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

const mapStateToProps = (state) => ({ pokemonsType: state.pokemonsType });
export default connect(mapStateToProps, {
  filterPokemons,
  getpokemons,
})(Types);
