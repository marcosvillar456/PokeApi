import React, { useEffect } from "react";
import "./Card_More.scss";
import { Fragment } from "react";
import { connect } from "react-redux";
import { getPokemonByName, getPokemonById } from "../../redux/actions/index";

function Card_More(props) {
  useEffect(() => {
    const SearchFor = props.location.state.buscarPor;
    console.log(SearchFor);
    if (SearchFor === "id") {
      let id = props.match.params.id;
      return props.getPokemonById(id);
    } else if (SearchFor === "name") {
      let name = props.match.params.id;
      return props.getPokemonByName(name);
    }
  }, [props.match.params]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!props.pokemonSearch.name) {
    return <h1>loading...</h1>;
  } else {
    if (!props.pokemonSearch.types[0]) {
      return <h1>loading...</h1>;
    } else {
      return (
        <Fragment>
          <div>
            <div className="Card" key={props.pokemonSearch.id}>
              <h1>id:{props.pokemonSearch.id}</h1>
              <div>
                <div className="name">{props.pokemonSearch.name}</div>
                <div className="container_types">
                  {props.pokemonSearch.types.map((typeinfo) => (
                    <div className={`bars ${typeinfo}`} key={typeinfo}>
                      {typeinfo}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <img
                  src={`https://projectpokemon.org/images/normal-sprite/${props.pokemonSearch.name}.gif`}
                  alt={props.pokemonSearch.name}
                />
              </div>
            </div>
            <h1>stats</h1>
            <div className="contenido">
              <div className="info">
                <div className="name">
                  <span>defending</span>
                </div>
                <div
                  className={`linea stats-${props.pokemonSearch.defending} ${props.pokemonSearch.types[0]}`}
                ></div>
              </div>

              <div className="info">
                <div className="name">
                  <span>force</span>
                </div>

                <div
                  className={`linea stats-${props.pokemonSearch.force} ${props.pokemonSearch.types[0]}`}
                ></div>
              </div>

              <div className="info">
                <div className="name">
                  <span>life</span>
                </div>
                <div
                  className={`linea stats-${props.pokemonSearch.life} ${props.pokemonSearch.types[0]}`}
                ></div>
              </div>

              <div className="info">
                <div className="name">
                  <span>speed</span>
                </div>
                <div
                  className={`linea stats-${props.pokemonSearch.speed} ${props.pokemonSearch.types[0]}`}
                ></div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}
const mapStateToProps = (state) => ({ pokemonSearch: state.pokemonSearch });
export default connect(mapStateToProps, { getPokemonByName, getPokemonById })(
  Card_More
);
