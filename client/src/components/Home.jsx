import React, { useEffect } from "react";
import "../styles/sass/Home.scss";
import { Fragment } from "react";
import { connect } from "react-redux";
import { getpokemons } from "../redux/actions/index";
import SearchBar from "./SearchBar";
import Types from "./Types";

function Home(props) {
  useEffect(() => {
    async function GetPokemons() {
      await props.getpokemons();
    }
    GetPokemons();
  }, [props.match.url]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!props.pokemons) {
    return <h1>loading...</h1>;
  } else if (!props.pokemons[1]) {
    return <h1>loading...</h1>;
  } else {
    return (
      <Fragment>
        <SearchBar />
        {/* <Types /> */}

        <div className="container_pokemons">
          {props.pokemons.map((pokemon) => {
            return (
              <Fragment key={pokemon.id}>
                <div className={`card_pokemon ${pokemon.types[0].name}_bg`}>
                  <img
                    src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`}
                    onError={(e) => {
                      e.target.errored = false;
                      pokemon.img
                        ? (e.target.src = pokemon.img)
                        : (e.target.src =
                            "https://w7.pngwing.com/pngs/723/887/png-transparent-computer-icons-x-mark-check-mark-red-x-miscellaneous-text-trademark-thumbnail.png");
                    }}
                    alt={pokemon.name}
                  />

                  <div>
                    <p className="Name_Pokemon">{pokemon.name}</p>
                    <div className="container_type">
                      {pokemon.types.map((nameType) => (
                        <div
                          className={`type ${nameType.name}`}
                          key={nameType.name}
                        >
                          {nameType.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({ pokemons: state.pokemons });
export default connect(mapStateToProps, { getpokemons })(Home);
