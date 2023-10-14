import { useState } from "react";
import "./Buscador.css";

const INITIAL_FILTERS = {
  fromYear: "",
  untilYear: "",
  minStars: "",
};

const Buscador = ({ movies, setFilteredMovies }) => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const onChangeHandler = ({ target: { value, id } }) => {
    setFilters((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Object.values(filters).some((value) => isNaN(+value))) {
      alert("All inputs must be numbers");
      return;
    }
    let fromYear = +filters.fromYear;
    let untilYear = +filters.untilYear;
    let minStars = +filters.minStars;

    if (
      fromYear &&
      untilYear &&
      (fromYear < 0 || untilYear < 0 || fromYear > untilYear)
    ) {
      alert("Years entered must be positive and in order");
      return;
    }

    if (minStars && (minStars < 0 || minStars > 10)) {
      alert("Stars must range from 0 to 10");
      return;
    }

    fromYear = fromYear || 0;
    untilYear = untilYear || Infinity;
    minStars = minStars || 0;

    setFilteredMovies(
      movies.filter(({ release_date, vote_average }) => {
        const releaseYear = new Date(release_date).getFullYear();
        return (
          releaseYear >= +fromYear &&
          releaseYear <= +untilYear &&
          vote_average >= +minStars
        );
      })
    );
  };

  return (
    <form className="filter-form" onSubmit={onSubmitHandler}>
      <h2 className="filter-form__title">Filter results by</h2>
      <section className="filter-form__section">
        <h3 className="filter-form__section-title">Release year</h3>
        <div className="filter-form__section-row">
          <label htmlFor="fromYear">From:</label>
          <input
            type="number"
            id="fromYear"
            pattern="\d{4}"
            className="filter-form__input"
            value={filters.fromYear}
            onChange={onChangeHandler}
          />
          <label htmlFor="untilYear">until:</label>
          <input
            type="number"
            id="untilYear"
            pattern="\d{4}"
            className="filter-form__input"
            value={filters.untilYear}
            onChange={onChangeHandler}
          />
        </div>
      </section>
      <section className="filter-form__section">
        <h3 className="filter-form__section-title">Rating</h3>
        <div className="filter-form__section-row">
          <label htmlFor="minStars">At least</label>
          <input
            type="number"
            id="minStars"
            className="filter-form__input"
            min={0}
            max={10}
            value={filters.minStars}
            onChange={onChangeHandler}
          />
          <span>stars</span>
        </div>
      </section>
      <button type="submit" className="button button--yellow">
        Filter
      </button>
    </form>
  );
};

export default Buscador;
