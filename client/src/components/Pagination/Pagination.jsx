import "./pagination.scss";
export default function Pagination({
  PokemonsPorPagina,
  totalPosts,
  setPaginaActual,
}) {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / PokemonsPorPagina); i++) {
    PageNumbers.push(i);
  }
  function paginate(PageNumber) {
    setPaginaActual(PageNumber);
  }
  return (
    <nav className="pagination">
      <ul className="container_nums">
        {PageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            <h1>{number}</h1>
          </li>
        ))}
      </ul>
    </nav>
  );
}
