import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar.jsx";
import Inicio from "./Pages/Inicio/Inicio";
import Formulario from "./components/Formulario/Formulario";
import More_Name from "./Pages/More/More_name";
import MoreId from "./Pages/More/More_id";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Inicio} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route path="/home/Search?name=:name" component={More_Name} />
      <Route path="/home/Search/:id" component={MoreId} />
      <Route path="/home/Crear_Pokemon" component={Formulario} />
    </div>
  );
}

export default App;
