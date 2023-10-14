import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ href, icon }) => {
  return (
    <li>
      <a href={href}>
        <FontAwesomeIcon icon={icon} className="fa-lg" />
      </a>
    </li>
  );
};

export default SocialIcon;
