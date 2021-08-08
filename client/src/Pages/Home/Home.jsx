import React, { useState } from "react";
import Card from "../../components/Card/Cards";
import "./Home.scss";
import { Fragment } from "react";
import { connect } from "react-redux";
import { get_types } from "../../redux/actions/index";
import Types from "../../components/Types/Types";

function Home(props) {
  const [Pokemons, SetPokemons] = useState(props.pokemons);

  const handleChangeSelect = (e) => {
    switch (e.target.value) {
      case "Ordenar Por Mayor Fuerza":
        let ordenarPorMayorrFuerza = [...props.pokemons].sort((a, b) =>
          a.force < b.force ? 1 : a.force > b.force ? -1 : 0
        );
        return SetPokemons(ordenarPorMayorrFuerza);

      case "Ordenar Por Menor Fuerza":
        let ordenarPorMenorFuerza = [...props.pokemons].sort((a, b) =>
          a.force > b.force ? 1 : a.force < b.force ? -1 : 0
        );
        return SetPokemons(ordenarPorMenorFuerza);

      case "Ordenar Por Nombre":
        let ordenarPorNombre = [...props.pokemons].sort(function (a, b) {
          let n = a.name
            .toLocaleLowerCase()
            .localeCompare(b.name.toLocaleLowerCase());
          return n;
        });
        return SetPokemons(ordenarPorNombre);

      case "Volver orden original":
        return SetPokemons(props.pokemons);

      default:
        return console.log("error");
    }
  };

  return (
    <Fragment>
      <div className="Home">
        <div className="options">
          <div className="container_types">
            <Types
              types={props.types}
              SetPokemons={SetPokemons}
              Pokemons={Pokemons}
            />
            Orden
            <select onChange={handleChangeSelect} defaultValue={"Ordenar por"}>
              <option value="Buscar por" disabled>
                Ordenar por
              </option>
              <option value="Ordenar Por Mayor Fuerza">Mayor Fuerza</option>

              <option value="Ordenar Por Menor Fuerza">Menor Fuerza</option>

              <option value="Ordenar Por Nombre">Alfabeticamente</option>

              <option value="Volver orden original">orden original</option>
            </select>
          </div>
        </div>
        <div className="container_pokemons">
          {Pokemons.map((pokemon) => {
            return (
              <Fragment key={pokemon.name}>
                <Card pokemon={pokemon} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  types: state.types,
});
export default connect(mapStateToProps, { get_types })(Home);
