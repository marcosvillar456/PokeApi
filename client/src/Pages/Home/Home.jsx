import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Cards";
import "./Home.scss";
import { Fragment } from "react";
import { connect, useSelector } from "react-redux";
import { getpokemons, get_types } from "../../redux/actions/index";

import Types from "../../components/Types/Types";

function Home(props) {
  const [Loading, setLoading] = useState(false);

  useEffect(async () => {
    async function GetPokemonsAndTypes() {
      await props.getpokemons();
      await props.get_types();
    }
    GetPokemonsAndTypes().then(() => setLoading(true));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let Pokemons = useSelector((state) => state.pokemons);

  function ordenado() {
    Pokemons.sort((a, b) => {
      return a.force - b.force;
    });
  }

  if (Loading === false) {
    return <h1>loading...</h1>;
  } else {
    return (
      <Fragment>
        <button onClick={() => ordenado()}>alfabeticamente</button>
        <div className="Home">
          <div className="options">
            <Types types={props.types} />
          </div>
          <div className="container_pokemons">
            {Pokemons.map((pokemon) => {
              return (
                <Fragment key={pokemon.id}>
                  <Card pokemon={pokemon} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  types: state.types,
});
export default connect(mapStateToProps, { getpokemons, get_types })(Home);
