import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Types from "../../components/Types/Types";
import Options from "../../components/options/options";
import "./Home.scss";

function Home() {
  const pokemonsEstado = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  const [Pokemons, SetPokemons] = useState(pokemonsEstado);
  const [PaginaActual, setPaginaActual] = useState(1);
  const [PokemonsPorPagina] = useState(12);

  const indexOfLastPost = PaginaActual * PokemonsPorPagina;
  const indexOfFirstPost = indexOfLastPost - PokemonsPorPagina;
  const currenPosts = Pokemons.slice(indexOfFirstPost, indexOfLastPost);

  if (!pokemonsEstado[0]) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <Pagination
          PokemonsPorPagina={PokemonsPorPagina}
          totalPosts={Pokemons.length}
          setPaginaActual={setPaginaActual}
        />

        <div className="Home">
          <div className="options">
            <h1>Filter by</h1>
            <div className="container_options">
              <Types
                setPaginaActual={setPaginaActual}
                types={types}
                SetPokemons={SetPokemons}
                Pokemons={Pokemons}
              />
              Order by
              <Options
                Pokemons={Pokemons}
                SetPokemons={SetPokemons}
                pokemonsEstado={pokemonsEstado}
              />
            </div>
          </div>

          <div className="container_pokemons">
            {currenPosts.map((pokemon) => {
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
}

export default Home;
