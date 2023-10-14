import { useState } from "react";
import TableHeader from "./TableHeader";
import MovieRow from "./MovieRow";
import { tableHeaders } from "./tableData";

const MovieTable = ({ page, movies }) => {
  if (!movies.length) {
    return <p className="search-results__not-found">No movies found</p>;
  }
  const [sort, setSort] = useState({
    by: "",
    order: "",
  });

  const sortedMovies = [...movies].sort((movieA, movieB) => {
    const sortCriteria = sort.by || tableHeaders[0].id;
    return movieA[sortCriteria] > movieB[sortCriteria]
      ? 1 * sort.order
      : -1 * sort.order;
  });

  return (
    <table
      className="table"
      style={{ borderCollapse: "collapse", flex: "1", minWidth: "60rem" }}
    >
      <thead className="table__headers">
        <tr className="table__headers-row">
          {tableHeaders.map((headerData) => (
            <TableHeader
              key={headerData.id}
              sort={sort}
              setSort={setSort}
              {...headerData}
            />
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {sortedMovies.map((movie, index) => (
          <MovieRow
            key={movie.id}
            index={index + movies.length * (page - 1)}
            movie={movie}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
