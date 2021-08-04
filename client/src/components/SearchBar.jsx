import React, { useState } from "react";
import "../styles/sass/Search.scss";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const [name, setName] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name) {
      e.preventDefault();
      history.push(`/Search/${name}`);
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
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
