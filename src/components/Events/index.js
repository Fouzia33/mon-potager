import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import semer from 'src/assets/images/semer.png';
import planter from 'src/assets/images/planter.png';
import recolter from 'src/assets/images/recolter.png';

import './events.scss';

const Events = ({
  sowingEvents,
  plantingEvents,
  harvestEvents,
  region,
  period,
  getPlantsEvents,
}) => {
  useEffect(() => {
    getPlantsEvents();
  }, []);

  // console.log('harvestEvents:', harvestEvents);
  // console.log('period:', period);
  // console.log('region:', region);

  return (
    <div className="events">

      <h2 className="events-title">
        Quoi de prévu au potager pour 
        <div className="period">{period.startDate}</div>
        <br /> en 
        <div className="region">{region.name}</div>
      </h2>

      <div className="sowing">
        <h3 className="sowing-title">
          <img src={semer} alt="semis" height="30" />
          Les semis à venir
        </h3>
        <ul className="plantList">
          {sowingEvents.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      </div>

      <div className="planting">
        <h3 className="planting-title">
          <img src={planter} alt="semis" height="30" />
          Les plantations à venir
        </h3>
        <ul className="plantList">
          {plantingEvents.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      </div>

      <div className="harvest">
        <h3 className="harvest-title">
          <img src={recolter} alt="semis" height="30" />
          Les récoltes à venir
        </h3>
        <ul className="plantList">
          {harvestEvents.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

Events.propTypes = {
  sowingEvents: PropTypes.array,
  plantingEvents: PropTypes.array,
  harvestEvents: PropTypes.array,
  region: PropTypes.object,
  period: PropTypes.object,
  getPlantsEvents: PropTypes.func.isRequired,

};
Events.defaultProps = {
  sowingEvents: [],
  plantingEvents: [],
  harvestEvents: [],
  region: [],
  period: [],

};

export default Events;
