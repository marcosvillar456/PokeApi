import { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";
import $ from "jquery";

import "./NavBarfunctions";
import "./NavBar.scss";
export default function NavBar() {
  let contador = 0;
  function menu() {
    $("nav").toggle();
    if (contador == 1) {
      $("nav").css("display", "block");
      $("nav").animate({
        left: "-100%",
      });
      contador = 0;
    } else {
      $("nav").css("display", "block");
      contador = 1;
      $("nav").animate({
        left: "-0%",
      });
    }
  }
  return (
    <Fragment>
      <header>
        <div className="menu_bar">
          <a className="bt-menu" onClick={() => menu()}>
            <span className="icon-list2"></span>Menu
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home/Crear_Pokemon">Crear Pokemon</Link>
            </li>
            <li style={{ padding: "20px", marginLeft: "auto" }}>
              <div>
                <SearchBar />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
