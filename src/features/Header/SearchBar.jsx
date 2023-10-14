import { useState } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutsideClick } from "../../hooks";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, onQueryChange, clearSearchQuery }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const searchFormRef = useOutsideClick(() => {
    if (!searchQuery) {
      setInputVisible(false);
    }
  }, false);
  const showInput = () => {
    if (!inputVisible) {
      setInputVisible(true);
    }
  };

  return (
    <form
      className={`search-form ${inputVisible ? "searching" : ""}`}
      ref={searchFormRef}
    >
      <button
        type="button"
        className="search-form__button search-form__button--main"
        onClick={showInput}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </button>
      <input
        className="search-form__input"
        type="search"
        name="query"
        placeholder="Search in IMDb"
        value={searchQuery}
        onChange={onQueryChange}
      />
      <button
        className={`search-form__button search-form__button--reset ${
          searchQuery ? "visible" : ""
        }`}
        type="reset"
        onClick={clearSearchQuery}
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>
    </form>
  );
};

export default SearchBar;
