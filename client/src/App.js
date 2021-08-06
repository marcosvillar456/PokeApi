import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Card_More from "./components/Card_More/Card_More";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./Pages/Inicio/Inicio";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Inicio} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route path="/home/Search/:id" component={Card_More} />
      <Route path="/home/Crear_Pokemon" component={Formulario} />
    </div>
  );
}

export default App;
