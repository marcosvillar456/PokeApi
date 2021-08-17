export default function Options({ SetPokemons, pokemons, setPaginaActual }) {
  const handleChangeSelect = (e) => {
    switch (e.target.value) {
      case "High To Low Force":
        let High_To_Low_Force = [...pokemons].sort((a, b) =>
          a.force < b.force ? 1 : a.force > b.force ? -1 : 0
        );
        setPaginaActual(1);
        return SetPokemons(High_To_Low_Force);

      case "Low To High Force":
        let Low_To_High_Force = [...pokemons].sort((a, b) =>
          a.force > b.force ? 1 : a.force < b.force ? -1 : 0
        );
        setPaginaActual(1);
        return SetPokemons(Low_To_High_Force);

      case "A-Z":
        let A_Z = [...pokemons].sort(function (a, b) {
          let n = a.name
            .toLocaleLowerCase()
            .localeCompare(b.name.toLocaleLowerCase());
          return n;
        });
        setPaginaActual(1);
        return SetPokemons(A_Z);

      case "Z-A":
        let Z_A = [...pokemons].sort(function (a, b) {
          let n = b.name
            .toLocaleLowerCase()
            .localeCompare(a.name.toLocaleLowerCase());
          return n;
        });
        setPaginaActual(1);
        return SetPokemons(Z_A);

      case "Our Pokemons":
        let Our_Pokemons = [...pokemons].filter((pokemon) => {
          return pokemon.id.length !== undefined;
        });
        setPaginaActual(1);
        return SetPokemons(Our_Pokemons);

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
