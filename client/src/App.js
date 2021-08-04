import { Route } from "react-router-dom";
import Home from "./components/Home";
import PokemonById from "./components/PokemonById";
import filter from "./components/filter";
import "./styles/css/App.css";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Search/:id" component={PokemonById} />
      <Route path="/Filter/:type" component={filter} />
    </div>
  );
}

export default App;
