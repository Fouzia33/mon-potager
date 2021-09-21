import React from 'react';
import './unsubscribe.scss';

const Unsubscribe = () => (
  <div className="unsubscribe">
    <p>La suppression de votre compte engendrera la perte de toutes vos données.</p>
    <p>Souhaitez-vous poursuivre?</p>
    <button
      className="unsubscribe__btn"
      type="submit"
    >
      Supprimer mon compte
    </button>
  </div>
);

export default Unsubscribe;
