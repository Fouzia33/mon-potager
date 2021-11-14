/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import jardiniers3 from 'src/assets/images/jardiniers3.png';

import './signUp.scss';

const SignUp = ({
  username,
  password,
  confirmPassword,
  email,
  region,
  changeFieldValue,
  handleSubmit,
  isSigned,
}) => {
  let errors = '';
  if (password !== confirmPassword) {
    errors = 'Saisissez le même mot de passe';
  }

  return (
    <div className="signUp">
      {!isSigned
        ? (
          <form
            className="signUp-form"
            onSubmit={(event) => {
              event.preventDefault();
              if (errors.length === 0) {
                handleSubmit();
              }
            }}
          >
            <Field
              identifier="username"
              placeholder="Nom d'utilisateur"
              label="Votre nom d'utilisateur"
              changeField={(identifier, newValue) => {
                changeFieldValue(identifier, newValue);
              }}
              value={username}
            />
            <Field
              identifier="password"
              placeholder="Mot de passe"
              label="Votre mot de passe"
              type="password"
              changeField={(identifier, newValue) => {
                changeFieldValue(identifier, newValue);
              }}
              value={password}
            />
            <Field
              identifier="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              label="Confirmez votre mot de passe"
              type="password"
              changeField={(identifier, newValue) => {
                changeFieldValue(identifier, newValue);
              }}
              value={confirmPassword}
            />
            {errors
              && (
                <span className="error">{errors}</span>
              )}
            <Field
              identifier="email"
              placeholder="Votre email"
              label="Votre email"
              type="email"
              changeField={(identifier, newValue) => {
                changeFieldValue(identifier, newValue);
              }}
              value={email}
            />
            <Field
              identifier="region"
              placeholder="Votre région"
              label="Votre région"
              type="region"
              changeField={(identifier, newValue) => {
                changeFieldValue(identifier, newValue);
              }}
              value={region}
            />
            <div className="buttons-group">
              <button
                type="submit"
                className="signUp-submit"
              >
                Valider
              </button>
              <button
                type="button"
                className="connect-submit"
              >
                <a href="/connexion" className="connect-link">Se connecter</a>
              </button>
            </div>

          </form>
        )
        : (
          <>
            <h1>Bienvenue dans le club des apprentis jardiniers!</h1>
            <h4>Tu peux te connecter dès maintenant et commencer ton propre calendrier.</h4>
            <button
              type="submit"
              className="connect-submit"
            > <a href="/connexion">Me connecter</a>
            </button>
            <div className="container-jardinier">
              <img
                src={jardiniers3}
                alt="jardiniers"
                className="jardiniers"
              />
            </div>
          </>
        )}
    </div>
  );
};

SignUp.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSigned: PropTypes.bool.isRequired,
};

export default SignUp;
