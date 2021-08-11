import { Fragment } from "react";
import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
  return (
    <Fragment key={pokemon.id}>
      <Link to={`/home/Search/${pokemon.id}`}>
        <div className={`card_pokemon ${pokemon.types[0].name}_bg`}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
            alt={pokemon.name}
          />
          <div>
            <p className="Name_Pokemon">{pokemon.name}</p>
            <div className="container_type">
              {pokemon.types.map((nameType) => (
                <div
                  className={`type ${nameType.name}`}
                  key={nameType.name}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}
