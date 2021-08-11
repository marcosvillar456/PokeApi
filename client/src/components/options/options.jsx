export default function Options({ Pokemons, SetPokemons, pokemonsEstado }) {
  const handleChangeSelect = (e) => {
    switch (e.target.value) {
      case "Ordenar Por Mayor Fuerza":
        let ordenarPorMayorrFuerza = [...Pokemons].sort((a, b) =>
          a.force < b.force ? 1 : a.force > b.force ? -1 : 0
        );
        return SetPokemons(ordenarPorMayorrFuerza);

      case "Ordenar Por Menor Fuerza":
        let ordenarPorMenorFuerza = [...Pokemons].sort((a, b) =>
          a.force > b.force ? 1 : a.force < b.force ? -1 : 0
        );
        return SetPokemons(ordenarPorMenorFuerza);

      case "A-Z":
        let A_Z = [...Pokemons].sort(function (a, b) {
          let n = a.name
            .toLocaleLowerCase()
            .localeCompare(b.name.toLocaleLowerCase());
          return n;
        });
        return SetPokemons(A_Z);

      case "Z-A":
        let Z_A = [...Pokemons].sort(function (a, b) {
          let n = b.name
            .toLocaleLowerCase()
            .localeCompare(a.name.toLocaleLowerCase());
          return n;
        });
        return SetPokemons(Z_A);

      case "Volver orden original":
        return SetPokemons(pokemonsEstado);

      default:
        return console.log("error");
    }
  };
  return (
    <select onChange={handleChangeSelect} defaultValue={"Ordenar por"}>
      <option value="Buscar por" disabled>
        Ordenar por
      </option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      <option value="Ordenar Por Mayor Fuerza">Mayor Fuerza</option>
      <option value="Ordenar Por Menor Fuerza">Menor Fuerza</option>
      <option value="Volver orden original">orden original</option>
    </select>
  );
}
