import './styles.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({ categories, zenMode, toggleZenMode }) {
  return (
    <header className="menu">
      <nav>
        {categories.map((category) => (
          <NavLink
            key={category.route}
            to={category.route}
            className={({ isActive }) => `menu-link ${isActive ? 'menu-link--selected' : ''}`}
          >
            {category.label}
          </NavLink>
        ))}
        <button
          className="menu-btn"
          type="button"
          onClick={toggleZenMode}
        >
          {`${zenMode ? 'Désactiver' : 'Activer'} le mode zen`}
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  zenMode: PropTypes.bool.isRequired,
  toggleZenMode: PropTypes.func.isRequired,
};

export default Header;
