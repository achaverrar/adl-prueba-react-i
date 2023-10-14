import { socialNetworkIcons, links } from "./footerData";
import { Button, Container, Link, SocialIcon } from "../../UI";
import amazonCompany from "../../assets/amazon-company.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__ctas">
        <div className="footer__cta footer__cta--mobile">
          <Button variant="yellow" className="footer__cta-button">
            Get the IMDb App
          </Button>
        </div>
        <div className="footer__cta footer__cta--sign-up">
          <Button children="footer__cta-button">Sign in for more access</Button>
        </div>
      </section>
      <section className="footer__socials">
        <ul className="footer__socials-list">
          {socialNetworkIcons.map((icon) => (
            <SocialIcon {...icon} />
          ))}
        </ul>
      </section>
      <Container className="container--footer">
        <section className="footer-links">
          <ul className="footer__links-list">
            {links.map((link) => (
              <Link {...link} />
            ))}
          </ul>
        </section>
        <section className="footer__copy">
          <div className="footer__copy-logo-container">
            <img
              src={amazonCompany}
              alt="IMDb, an Amazon company"
              className="footer__copy-logo"
            />
          </div>
          <small className="footer__copy-time-range">
            &copy; 1990-{new Date().getFullYear()} by IMDb.com, Inc.
          </small>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
