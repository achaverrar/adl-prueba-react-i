import imdbProLogo from "../../assets/imdb-pro.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#" className="nav__link button button--dark">
            <img src={imdbProLogo} alt="IMDb Pro Logo" />
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link button button--dark">
            Watchlist
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link button button--dark">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
