import React, { useState } from "react";

import { UploadPokemon } from "../../redux/actions";
import { connect } from "react-redux";

function Formulario(props) {
  const [input, setInput] = useState({
    name: "",
    life: "",
    force: "",
    defending: "",
    speed: "",
    heigth: "",
    weight: "",
    img_DB: "",
    type1: "",
    type2: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const upload = (e) => {
    e.preventDefault();

    props.UploadPokemon(
      input.name,
      input.life,
      input.force,
      input.defending,
      input.speed,
      input.heigth,
      input.weight,
      input.type1,
      input.type2,
      input.img_DB
    );
  };
  return (
    <form onSubmit={upload}>
      <h3>Name</h3>
      <input
        placeholder="Name"
        name="name"
        type="text"
        onChange={handleInputChange}
        value={input.name}
        required
      ></input>
      <h3>life</h3>
      <input
        placeholder="life"
        type="number"
        name="life"
        onChange={handleInputChange}
        value={input.life}
        required
      ></input>
      <h3>force</h3>
      <input
        placeholder="force"
        type="number"
        name="force"
        onChange={handleInputChange}
        value={input.force}
        required
      ></input>
      <h3>defending</h3>
      <input
        placeholder="defending"
        type="number"
        name="defending"
        onChange={handleInputChange}
        value={input.defending}
        required
      ></input>
      <h3>speed</h3>
      <input
        placeholder="speed"
        type="number"
        name="speed"
        onChange={handleInputChange}
        value={input.speed}
        required
      ></input>
      <h3>heigth</h3>
      <input
        placeholder="heigth"
        type="number"
        name="heigth"
        onChange={handleInputChange}
        value={input.heigth}
        required
      ></input>
      <h3>weight</h3>
      <input
        placeholder="weight"
        type="number"
        name="weight"
        onChange={handleInputChange}
        value={input.weight}
        required
      ></input>
      <h3>img_DB</h3>
      <input
        placeholder="type"
        type="text"
        name="type1"
        onChange={handleInputChange}
        value={input.type1}
      ></input>
      <input
        placeholder="type"
        type="text"
        name="type2"
        onChange={handleInputChange}
        value={input.type2}
      ></input>
      <input
        placeholder="img_DB"
        type="file"
        name="img_DB"
        onChange={handleInputChange}
        value={input.img_DB}
        required
      ></input>
      <br />
      <br />
      <button type="submit">Crear</button>
    </form>
  );
}
const mapStateToProps = () => ({});

export default connect(mapStateToProps, { UploadPokemon })(Formulario);
