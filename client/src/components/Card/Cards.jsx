import { Fragment } from "react";
import React from "react";
import "./Card.scss";

export default function Card({ pokemon }) {
  return (
    <Fragment key={pokemon.id}>
      <div className={`card_pokemon ${pokemon.types[0]}_bg`}>
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
              <div className={`type ${nameType}`} key={nameType}>
                {nameType}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
