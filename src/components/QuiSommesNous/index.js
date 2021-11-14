import React from 'react';
import './quiSommesNous.scss';
import jona from 'src/assets/images/jona.png';
import claudia from 'src/assets/images/claudia.png';
import paul from 'src/assets/images/paul.png';
import mathieu from 'src/assets/images/mathieu.png';
import fouzia from 'src/assets/images/fouzia.png';

const QuiSommesNous = () => (
  <div className="quiSommesNous">
    <div className="intro">
      <h1> La team de jardiniers</h1>
      <p>
        C'est l'histoire d'une idée qui a pris racine au
        sein d'une équipe en reconversion professionnelle ! <br />
        Claudia, Fouzia, Jonathan, Mathieu et Paul, <br />
        ont voulu mettre en pratique leurs connaissances
        fraîchement acquises durant leur formation chez O'clock
        au service des jardiniers (novices ou confirmés), afin de leur proposer un outil
        de gestion pour leur potager.
      </p>
    </div>
    <div className="team-front">
      <h2>Team Front</h2>
      <div className="team-dev">
        <div className="dev">
          <img
            src={claudia}
            alt="avatar"
            height="120"
            width="120"
          />
          <h3 className="name">Claudia</h3>
          <p>Product Owner</p>
        </div>
        <div className="dev">
          <img
            src={fouzia}
            alt="avatar"
            height="120"
            width="120"
          />
          <h3 className="name">Fouzia</h3>
          <p> Lead Dev</p>
        </div>
        <div className="dev">
          <img
            src={jona}
            alt="avatar"
            height="120"
            width="120"
          />
          <h3 className="name">Jonathan</h3>
          <p>Referent technique</p>
        </div>
      </div>
    </div>
    <div className="team-back">
      <h2>Team back</h2>
      <div className="team-dev">
        <div className="dev">
          <img
            src={mathieu}
            alt="avatar"
            height="120"
            width="120"
          />
          <h3 className="name">Mathieu</h3>
          <p>Scrum Master</p>
        </div>

        <div className="dev">
          <img
            src={paul}
            alt="avatar"
            height="120"
            width="120"
          />
          <h3 className="name">Paul</h3>
          <p>Lead Dev</p>
        </div>
      </div>
    </div>
  </div>
);

export default QuiSommesNous;
