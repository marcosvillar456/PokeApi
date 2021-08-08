import React, { Fragment, useState } from "react";
import "./Search.scss";
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
        pathname: `/home/Search/${name}`,
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          className="Input"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          placeholder="Search..."
          required
        />
        <select onClick={handleChangeSelect} className="menu" required>
          <option defaultValue selected value="name">
            Name
          </option>
          <option value="id">Id</option>
        </select>
      </form>
    </Fragment>
  );
}

export default SearchBar;
