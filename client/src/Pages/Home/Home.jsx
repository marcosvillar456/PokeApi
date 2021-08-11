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
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(12);

  const indexOfLastPost = CurrentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currenPosts = Pokemons.slice(indexOfFirstPost, indexOfLastPost);

  if (!pokemonsEstado[0]) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <Pagination
          PostsPerPage={PostsPerPage}
          totalPosts={Pokemons.length}
          setCurrentPage={setCurrentPage}
        />

        <div className="Home">
          <div className="options">
            <h1>Filter by</h1>
            <div className="container_options">
              <Types
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
