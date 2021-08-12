import React, { useState } from "react";
import { Fragment } from "react";
import pokeball from "../../img/pngegg.png";
import { useDispatch, useSelector } from "react-redux";
import { UploadPokemon } from "../../redux/actions";
import "../Card_More/Card_More.scss";
import "./Formulario.scss";
export default function Formulario() {
  const types = useSelector((state) => state.types);
  let contador1 = 0;
  let contador2 = 0;

  const [input, setInput] = useState({
    name: "",
    life: "",
    force: "",
    defending: "",
    speed: "",
    heigth: "",
    weight: "",
    img: "",
    type1: "",
    type2: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const upload = (e) => {
    e.preventDefault();

    dispatch(
      UploadPokemon(
        input.name,
        input.life,
        input.force,
        input.defending,
        input.speed,
        input.heigth,
        input.weight,
        input.type1,
        input.type2,
        input.img
      )
    );
  };
  return (
    <Fragment>
      <div className="container">
        <form onSubmit={upload}>
          <h4>Name</h4>
          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleInputChange}
            value={input.name}
            required
          ></input>
          <div className="stats_pokemon">
            <div>
              <h4>life</h4>
              <input
                min="10"
                max="100"
                placeholder="life"
                type="number"
                name="life"
                onChange={handleInputChange}
                value={input.life}
                required
              ></input>
            </div>
            <div>
              <h4>force</h4>
              <input
                min="10"
                max="100"
                placeholder="force"
                type="number"
                name="force"
                onChange={handleInputChange}
                value={input.force}
                required
              ></input>
            </div>
            <div>
              <h4>defending</h4>
              <input
                min="10"
                max="100"
                placeholder="defending"
                type="number"
                name="defending"
                onChange={handleInputChange}
                value={input.defending}
                required
              ></input>
            </div>
            <div>
              <h4>speed</h4>
              <input
                min="10"
                max="100"
                placeholder="speed"
                type="number"
                name="speed"
                onChange={handleInputChange}
                value={input.speed}
                required
              ></input>
            </div>
            <div>
              <h4>heigth</h4>
              <input
                min="10"
                max="100"
                placeholder="heigth"
                type="number"
                name="heigth"
                onChange={handleInputChange}
                value={input.heigth}
                required
              ></input>
            </div>
            <div>
              <h4>weight</h4>
              <input
                type="number"
                min="10"
                max="100"
                placeholder="weight"
                name="weight"
                onChange={handleInputChange}
                value={input.weight}
                required
              ></input>
            </div>

            <div>
              <h4>type1</h4>
              <select
                placeholder="type"
                type="text"
                name="type1"
                onChange={handleInputChange}
                value={input.type1}
              >
                {types.map((type) => (
                  <option key={type} value={contador1++}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>type2</h4>
              <select
                placeholder="type"
                type="text"
                name="type2"
                onChange={handleInputChange}
                value={input.type2}
              >
                {types.map((type) => (
                  <option key={type} value={contador2++}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h4>img_DB</h4>
          <input
            placeholder="img"
            type="text"
            name="img"
            onChange={handleInputChange}
            value={input.img}
            required
          ></input>
          <br />
          <br />
          <button type="submit">Crear</button>
        </form>

        <div>
          <img
            id="pokeball"
            src={pokeball}
            style={{ zIndex: "0", width: "100px" }}
          ></img>
          <img src={`${input.img}`} alt="" style={{ width: "100px" }} />
        </div>
      </div>
    </Fragment>
  );
}
