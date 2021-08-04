import React, { useEffect } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { getPokemonByIdOrName } from "../redux/actions";
import SearchBar from "./SearchBar";

function PokemonById(props) {
  useEffect(() => {
    let id = props.match.params.id;

    props.getPokemonByIdOrName(id);
  }, [props.match.params.id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Fragment>
      <h1>Henry Pokemon</h1>
      <SearchBar />
      {!props.pokemonSearch[0] ? (
        <h1>loading...</h1>
      ) : props.pokemonSearch[0].name === "Error" ? (
        <h1>Pokemon inexistente</h1>
      ) : (
        <div className="" key={props.pokemonSearch.id}>
          <img
            src={`https://projectpokemon.org/images/normal-sprite/${props.pokemonSearch[0].name}.gif`}
            alt={props.pokemonSearch[0].name}
          />
          <div>
            <p className="Name_Pokemon">{props.pokemonSearch[0].name}</p>
            <div className="container_type">
              {props.pokemonSearch[0].types.map((typeinfo) => (
                <div className={`type ${typeinfo.name}`} key={typeinfo.name}>
                  {typeinfo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
const mapStateToProps = (state) => ({ pokemonSearch: state.pokemonSearch });
export default connect(mapStateToProps, { getPokemonByIdOrName })(PokemonById);
