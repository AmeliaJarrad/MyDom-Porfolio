import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';
import { Link } from 'react-router-dom';

 function NavBar() {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.active_link}` : classes.link;

  return (
    <nav className={classes.nav}>
        <Link to="/">Home</Link>
      <a href="#about">About</a>
        <Link to="/projects">Projects</Link>
      <a href="#contact">Contact</a>  
    </nav>
  );
}

export default NavBar 