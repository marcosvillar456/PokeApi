import { useDispatch } from "react-redux";
import {
  Z_A,
  A_Z,
  High_To_Low,
  Low_To_High,
  Our_Pokemons,
} from "../../redux/actions";
export default function Options() {
  const dispatch = useDispatch();
  const handleChangeSelect = (e) => {
    switch (e.target.value) {
      case "High To Low Force":
        return dispatch(High_To_Low());

      case "Low To High Force":
        return dispatch(Low_To_High());

      case "A-Z":
        return dispatch(A_Z());

      case "Z-A":
        return dispatch(Z_A());

      case "Our Pokemons":
        return dispatch(Our_Pokemons());

      default:
        return console.log("error");
    }
  };
  return (
    <select onChange={handleChangeSelect} defaultValue="Ordenar por">
      <option value="Buscar por" disabled>
        Ordenar por
      </option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      <option value="High To Low Force">High To Low Force</option>
      <option value="Low To High Force">Low To High Force</option>
      <option value="Our Pokemons">Our Pokemons</option>
    </select>
  );
}
