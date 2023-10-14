import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Link.css";

const Link = ({ href, text, external }) => {
  return (
    <li>
      <a href={href} className="link">
        {text}
        {external && (
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-xs" />
        )}
      </a>
    </li>
  );
};

export default Link;
