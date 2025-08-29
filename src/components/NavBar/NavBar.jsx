import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.scss';

import monogramGold from '../../assets/logo/Gold_monogram.png'
import monogramBrown from '../../assets/logo/Brown_monogram.png'

function NavBar() {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.active_link}` : classes.link;

  return (
    <nav className={classes.nav}>
       <div className={classes.logo}>
          <img src={monogramGold} alt="Amelia's logo" />
        </div>

        <div className={classes.links}>
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkStyles}>
        About
      </NavLink>
      <NavLink to="/projects" className={linkStyles}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={linkStyles}>
        Contact
      </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
