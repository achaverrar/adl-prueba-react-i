import "./MovieRow.css";

const MovieRow = ({ index, movie }) => {
  return (
    <tr className="table__row">
      <td>{index + 1}</td>
      <td>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt={movie.original_title}
            style={{ width: "50px" }}
          />
        ) : (
          ""
        )}
      </td>
      <td>{movie.title}</td>
      <td>{movie.release_date}</td>
      <td>{movie.vote_average}</td>
      <td>{movie.vote_count}</td>
    </tr>
  );
};

export default MovieRow;
