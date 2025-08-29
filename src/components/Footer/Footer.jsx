// src/components/Footer/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.tagline}>
        Powered by React, caffeine, and occasional panic.
        <br />
        © 2025 Amelia Jarrad
      </p>
      <div className={classes.icons}>
        <a
          href="https://github.com/AmeliaJarrad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a
          href="https://linkedin.com/in/ameliajarrad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <Link
          to="/contact"
          aria-label="Contact Page"
        >
          <FontAwesomeIcon icon={['fas', 'envelope']} />
        </Link>
      </div>
    </footer>
  );
}
