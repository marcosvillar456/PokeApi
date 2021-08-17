import { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";
import "./NavBar.scss";

export default function NavBar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <Fragment>
      <div className="topnav" id="myTopnav">
        <h1>
          <Link to="/home">
            <img
              style={{ float: "left" }}
              src="https://image.flaticon.com/icons/png/512/528/528101.png"
              alt="pokeball"
              width="30px"
            ></img>
          </Link>
        </h1>
        <h1>
          <Link to="/home">Home</Link>
        </h1>
        <h1>
          <Link to="/home/Crear_Pokemon">Crear Pokemon</Link>
        </h1>
        <h3>
          <SearchBar />
        </h3>

        <h1 className="icon" onClick={() => myFunction()}>
          <i className="fa fa-bars"></i>
        </h1>
      </div>
    </Fragment>
  );
}
