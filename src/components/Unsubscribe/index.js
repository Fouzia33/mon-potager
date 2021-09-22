import React from 'react';
import PropTypes from 'prop-types';
import './unsubscribe.scss';

const Unsubscribe = ({ manageDeleteSubmit }) => {
  const handleDelete = (evt) => {
    evt.preventDefault();
    manageDeleteSubmit();
  };
  return (
    <div className="unsubscribe">
      <p>La suppression de votre compte engendrera la perte de toutes vos données.</p>
      <p>Souhaitez-vous poursuivre?</p>
      <button
        className="unsubscribe__btn"
        type="submit"
        onClick={(evt) => handleDelete(evt)}
      >
        Supprimer mon compte
      </button>
    </div>
  );
};

Unsubscribe.propTypes = {
  manageDeleteSubmit: PropTypes.func.isRequired,
};
export default Unsubscribe;
