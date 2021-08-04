import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { filterPokemons } from "../redux/actions";
import Types from "./Types";
import SearchBar from "./SearchBar";
class filter extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidUpdate.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }
  //apenas se monta el componente se ejecuta (esto es para la primera vez)
  componentDidMount() {
    this.props.filterPokemons(this.props.match.params.type);
  }
  //como se bugeaba y renderizaba uno anterior al clickeado con esto lo puedo solucionar ya que ejecuta el anterior
  componentDidUpdate(prevProps) {
    if (prevProps !== undefined) {
      if (this.props.match.params.type !== prevProps.match.params.type)
        this.props.filterPokemons(this.props.match.params.type);
    }
  }
  render() {
    return (
      <Fragment>
        <SearchBar />
        <Types />
        <div className="container_pokemons">
          {this.props.pokemonFilter?.map((pokemon) => {
            return (
              <Link to={`/Search/${pokemon.name}`} key={pokemon.name}>
                <div className={`card_pokemon ${pokemon.types[0].types[0]}_bg`}>
                  <p className="Name_Pokemon">{pokemon.name}</p>

                  <img
                    src={
                      `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
                        ? `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
                        : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                    }
                    alt={pokemon.name}
                  />
                  <div className="container_type">
                    {pokemon.types[0].types.map((typeinfo) => (
                      <div className={`type ${typeinfo}`} key={typeinfo}>
                        {typeinfo}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ pokemonFilter: state.pokemonFilter });
export default connect(mapStateToProps, { filterPokemons })(filter);
