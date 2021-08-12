import React from "react";
import "./Card_More.scss";
import { Fragment } from "react";

function CardMore({ pokemon }) {
  return (
    <Fragment>
      <div>
        <div className="Card" key={pokemon.id}>
          <h4>id:{pokemon.id}</h4>
          <div>
            <div className="name">{pokemon.name}</div>
            <div className="container_types">
              {pokemon.types.map((typeinfo) => (
                <div
                  className={`type ${typeinfo.name}`}
                  key={typeinfo.name}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <img src={`${pokemon.img}`} alt={pokemon.name} />
          </div>
        </div>
        <h1>stats</h1>
        <div className="contenido">
          <div className="info">
            <div className="name">
              <span>defending</span>
            </div>
            <div
              className={`linea stats-${pokemon.defending} ${pokemon.types[0].name}`}
            ></div>
          </div>

          <div className="info">
            <div className="name">
              <span>force</span>
            </div>

            <div
              className={`linea stats-${pokemon.force} ${pokemon.types[0].name}`}
            ></div>
          </div>

          <div className="info">
            <div className="name">
              <span>life</span>
            </div>
            <div
              className={`linea stats-${pokemon.life} ${pokemon.types[0].name}`}
            ></div>
          </div>

          <div className="info">
            <div className="name">
              <span>speed</span>
            </div>
            <div
              className={`linea stats-${pokemon.speed} ${pokemon.types[0].name}`}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardMore;
