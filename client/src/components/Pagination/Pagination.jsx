import { Fragment } from "react";
import "./pagination.scss";
export default function Pagination({
  pageNumberLimit,
  PaginaActual,
  PokemonsPorPagina,
  setmaxPageNumberLimit,
  maxPageNumberLimit,
  setminPageNumberLimit,
  minPageNumberLimit,
  totalPosts,
  setPaginaActual,
}) {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / PokemonsPorPagina); i++) {
    PageNumbers.push(i);
  }

  const handleClick = (event) => {
    setPaginaActual(Number(event.target.id));
  };

  const handlePrevbtn = () => {
    setPaginaActual(PaginaActual - 1);

    if ((PaginaActual - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setPaginaActual(PaginaActual + 1);

    if (PaginaActual + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const renderPageNumber = PageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={PaginaActual === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  return (
    <Fragment>
      <div className="paginate">
        <ul className="pageNumbers">
          <li onClick={handlePrevbtn}>
            <button disabled={PaginaActual === PageNumbers[0] ? true : false}>
              Prev
            </button>
          </li>
          {renderPageNumber}
          <li onClick={handleNextbtn}>
            <button
              disabled={
                PaginaActual === PageNumbers[PageNumbers.length - 1]
                  ? true
                  : false
              }
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
