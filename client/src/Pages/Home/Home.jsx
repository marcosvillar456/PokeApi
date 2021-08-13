import React, { useState, Fragment, useEffect } from "react";
import { getpokemons, get_types } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Types from "../../components/Types/Types";
import Options from "../../components/options/options";

import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const pokemonsEstado = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  if (!types[2] && !pokemonsEstado[2]) {
    dispatch(get_types());
    dispatch(getpokemons());
  }

  const [Pokemons, SetPokemons] = useState(pokemonsEstado);
  const [PaginaActual, setPaginaActual] = useState(1);
  const [PokemonsPorPagina] = useState(12);
  const [pageNumberLimit] = useState(5);

  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const indexOfLastPost = PaginaActual * PokemonsPorPagina;
  const indexOfFirstPost = indexOfLastPost - PokemonsPorPagina;
  const currenPosts = Pokemons.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    SetPokemons(pokemonsEstado);
  }, [pokemonsEstado]);

  return !pokemonsEstado[0] ? (
    <Loading />
  ) : (
    <Fragment>
      <Pagination
        PokemonsPorPagina={PokemonsPorPagina}
        pageNumberLimit={pageNumberLimit}
        totalPosts={Pokemons.length}
        PaginaActual={PaginaActual}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setmaxPageNumberLimit={setmaxPageNumberLimit}
        setminPageNumberLimit={setminPageNumberLimit}
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

export default Home;
