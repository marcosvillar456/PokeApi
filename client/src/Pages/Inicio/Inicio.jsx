import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <Fragment>
      <h1>Bienvenido</h1>
      <Link to="/home">Inicio</Link>
    </Fragment>
  );
}
