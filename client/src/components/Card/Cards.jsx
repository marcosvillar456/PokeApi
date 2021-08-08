import { Fragment } from "react";
import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
  return (
    <Fragment key={pokemon.id}>
      <Link to={`/home/Search/${pokemon.name}`}>
        <div className={`card_pokemon ${pokemon.types[0].name}_bg`}>
          <img
            // src={pokemon.img}
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
                <div className={`type ${nameType.name}`} key={nameType.name}>
                  {nameType.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}
