import { useEffect, useState } from "react";
import MovieTable from "./MovieTable";
import Buscador from "./Buscador";
import { Container, Loader } from "../../UI";
import "./SearchResults.css";

const SearchResults = ({ page, movies, loading, searchQuery }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <Container className="container--main">
      <p className="search-results__title section-title--main">
        Search "{searchQuery}"
      </p>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <Container className="container--results">
          <Buscador movies={movies} setFilteredMovies={setFilteredMovies} />
          <MovieTable page={page} movies={filteredMovies} />
        </Container>
      )}
    </Container>
  );
};

export default SearchResults;
