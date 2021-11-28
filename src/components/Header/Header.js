import SearchBar from 'components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => (
    <header>
  <nav className={s.nav}>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
      Movies
    </NavLink>
    </nav>
    
    <SearchBar></SearchBar>
      </header>
);

export default Header;