import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.scss";

function SearchBar() {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      e.preventDefault();
      history.push({
        pathname: `/home/Search?name=${name}`,
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
      </form>
    </Fragment>
  );
}

export default SearchBar;
