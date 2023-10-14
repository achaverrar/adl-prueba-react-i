import SearchBar from "./SearchBar";
import { Container } from "../../UI";
import Nav from "./Nav";
import imdbLogo from "../../assets/logo.svg";
import "./Header.css";

const Header = ({ searchQuery, onQueryChange, clearSearchQuery }) => {
  return (
    <header className="header">
      <Container className="container--header">
        <h1 className="header__title">
          <a href="#" className="header__title-link">
            <img
              src={imdbLogo}
              alt="IMDb Logo"
              className="header__title-logo"
            />
          </a>
        </h1>
        <div className="form-search-container">
          <SearchBar
            searchQuery={searchQuery}
            onQueryChange={onQueryChange}
            clearSearchQuery={clearSearchQuery}
          />
        </div>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
