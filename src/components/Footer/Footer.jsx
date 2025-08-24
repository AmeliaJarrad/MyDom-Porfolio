import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.topDivider}></div>
      <div className={classes.content}>
        <nav className={classes.nav}>
          <Link to="/">Home</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className={classes.social}>
          <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={classes.bottom}>
        © {new Date().getFullYear()} Amelia Jarrad. Powered by React, caffeine, and occasional panic.
      </div>
    </footer>
  );
}
