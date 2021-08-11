import "./pagination.scss";
export default function Pagination({
  PostsPerPage,
  totalPosts,
  setCurrentPage,
}) {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / PostsPerPage); i++) {
    PageNumbers.push(i);
  }
  function paginate(PageNumber) {
    setCurrentPage(PageNumber);
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
