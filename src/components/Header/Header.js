import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => (
    <header>
  <nav className={s.nav}>
      <NavLink exact to="/" className={({ isActive })=> (isActive? "active" : "link")} >
      Home
    </NavLink>

    <NavLink to="/movies" className={({ isActive })=> (isActive? "active" : "link")}>
      Movies
    </NavLink>
    </nav>
      </header>
);

export default Header;