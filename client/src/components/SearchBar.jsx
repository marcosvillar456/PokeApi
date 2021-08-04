import React, { useState } from "react";
import "../styles/sass/Search.scss";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [name, setName] = useState("");
  const [optionsState, setOptionsState] = useState("name");

  let history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setOptionsState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      e.preventDefault();
      history.push({
        pathname: `/Search/${name}`,
        state: { buscarPor: optionsState },
      });
    }
  };

  return (
    <div>
      <h2>Search a Pokemon</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="Input"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            placeholder="Search..."
          />
          <select onClick={handleChangeSelect}>
            <option defaultValue value="name">
              Name
            </option>
            <option value="id">Id</option>
          </select>
          <button type="submit">buscar</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
