import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/css/Types.css";
class Types extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container_types">
          <div className="button grass">
            <Link to="/Filter/grass">grass</Link>
          </div>
          <div className="button fire">
            <Link to="/Filter/fire">fire</Link>
          </div>
          <div className="button water">
            <Link to="/Filter/water">water</Link>
          </div>
          <div className="button ghost">
            <Link to="/Filter/ghost">ghost</Link>
          </div>
          <div className="button poison">
            <Link to="/Filter/poison">poison</Link>
          </div>
          <div className="button flying">
            <Link to="/Filter/flying">flying</Link>
          </div>
          <div className="button electric">
            <Link to="/Filter/electric">electric</Link>
          </div>
          <div className="button ground">
            <Link to="/Filter/ground">ground</Link>
          </div>
          <div className="button normal">
            <Link to="/Filter/normal">normal</Link>
          </div>
          <div className="button fairy">
            <Link to="/Filter/fairy">fairy</Link>
          </div>
          <div className="button fighting">
            <Link to="/Filter/fighting">fighting</Link>
          </div>
          <div className="button ice">
            <Link to="/Filter/ice">ice</Link>
          </div>

          <div className="button psychic">
            <Link to="/Filter/psychic">psychic</Link>
          </div>
          <div className="button rock">
            <Link to="/Filter/rock">rock</Link>
          </div>
          <div className="button dragon">
            <Link to="/Filter/dragon">dragon</Link>
          </div>
          <div className="button dark">
            <Link to="/Filter/dark">dark</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Types;
