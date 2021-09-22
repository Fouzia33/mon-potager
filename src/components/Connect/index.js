import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from 'src/components/Field';
import UserCalendar from 'src/containers/UserCalendar';
import './connect.scss';

const Connect = ({
  userName,
  password,
  changeFieldValue,
  handleSubmit,
  isLogged,
}) => (
  <div className="connect">
    {!isLogged
      ? (
        <form
          className="connect-form"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Field
            identifier="userName"
            placeholder="Nom d'utilisateur"
            label="Nom d'utilisateur"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={userName}
          />
          <Field
            identifier="password"
            placeholder="Mot de passe"
            label="Mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={password}
          />
          <button
            type="submit"
            className="connect-submit"
          >
            Valider
          </button>
          <button
            type="button"
            className="register-submit"
          >
            <Link to="/inscription" className="register-link">S'inscrire</Link>
          </button>
        </form>
      )
      : <UserCalendar />}
  </div>
);

Connect.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Connect;
