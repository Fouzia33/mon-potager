import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import { Icon } from 'semantic-ui-react';
import { Settings } from 'react-feather';

const Footer = ({ selected }) => (
  // footer menu
  <>
    <div className="nav">
      <NavLink
        className="nav-item"
        to="/mentions-legales"
        activeClassName="nav-item--active"
        exact
      >
        Mentions légales
      </NavLink>
      <NavLink
        className="nav-item"
        to="/CGU"
        activeClassName="nav-item--active"
        exact
      >
        CGU
      </NavLink>
      <NavLink
        className="nav-item"
        to="/qui-sommes-nous"
        activeClassName="nav-item--active"
        exact
      >
        Qui sommes-nous?
      </NavLink>
      <NavLink
        to="/desinscription"
        activeClassName="settings"
        exact
      >
        <Settings size="15px" />
      </NavLink>
    </div>

    <div className="nav-mobile">
      <NavLink
        to="/"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        <Icon name="home" size="large" className="nav-icon" />
        Accueil
      </NavLink>
      <NavLink
        to="/connexion"
        className="nav-item "
        activeClassName="nav-item--active"
        exact
      >
        <Icon name="user circle outline" size="large" className="nav-icon" />
        Compte
      </NavLink>
      <NavLink
        to="/plantes"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        <Icon name="leaf" size="large" className="nav-icon" />
        Plantes
      </NavLink>

      { selected && (
        <NavLink
          to="/evenements"
          className="nav-item"
          activeClassName="nav-item--active"
          exact
        >
          <Icon name="bell outline" size="large" className="nav-icon" />
          Evenements
        </NavLink>
      )}
    </div>
  </>
);

Footer.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default Footer;
