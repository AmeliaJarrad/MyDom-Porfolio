// src/components/Footer/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.tagline}>
        Powered by React, caffeine, and occasional panic.
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
        <a
          href="mailto:amelia@example.com"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={['fas', 'envelope']} />
        </a>
      </div>
    </footer>
  );
}
