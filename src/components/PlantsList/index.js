import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import './plantsList.scss';
import Loader from 'src/components/Loader';

function createMarkup(data) {
  return { __html: DOMPurify.sanitize(data) };
}

const PlantsList = ({ plants, getPlantsList, loading }) => {
  useEffect(() => {
    getPlantsList();
  }, []);

  return (
    <div className="accordion">
      {loading && <Loader />}
      {plants.map((plant) => {
        let semis = plant.periode_regions['debut_semi-month_aquitaine']?.[0];
        let planting = plant.periode_regions['debut_plant-month_aquitaine']?.[0];
        let harvest = plant.periode_regions['debut_recolte-month_aquitaine']?.[0];

        if (plant.periode_regions['debut_semi-month_aquitaine']?.[0] !== plant.periode_regions['fin_semi-month_aquitaine']?.[0]) {
          semis = `${plant.periode_regions['debut_semi-month_aquitaine']?.[0]} à ${plant.periode_regions['fin_semi-month_aquitaine']?.[0]}`;
        }
        if (plant.periode_regions['debut_plant-month_aquitaine']?.[0] !== plant.periode_regions['fin_plant-month_aquitaine']?.[0]) {
          planting = `${plant.periode_regions['debut_plant-month_aquitaine']?.[0]} à ${plant.periode_regions['fin_plant-month_aquitaine']?.[0]}`;
        }
        if (plant.periode_regions['debut_recolte-month_aquitaine']?.[0] !== plant.periode_regions['fin_recolte-month_aquitaine']?.[0]) {
          harvest = `${plant.periode_regions['debut_recolte-month_aquitaine']?.[0]} à ${plant.periode_regions['fin_recolte-month_aquitaine']?.[0]}`;
        }
        return (
          <React.Fragment key={plant.id}>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title"><span>{plant.title.rendered}</span></div>
            <div className="accordion-content">
              <div className="reponsive">
                <div className="container-image">
                  <img
                    // eslint-disable-next-line no-underscore-dangle
                    src={plant._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
                    alt="plante"
                    className="accordion-image"
                  />
                </div>

                <div>
                  {semis && (
                    <p className="period-list">
                      Semis: {semis}
                    </p>
                  )}

                  {planting && (
                    <p className="period-list">
                      Plantation: {planting}
                    </p>
                  )}

                  {harvest && (
                    <p className="period-list">
                      Récolte: {harvest}
                    </p>
                  )}
                  <h4 className="description">Description</h4>
                  <p dangerouslySetInnerHTML={createMarkup(plant.content.rendered)} />
                </div>
              </div>

            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

PlantsList.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.object.isRequired,
      content: PropTypes.object.isRequired,
      _embedded: PropTypes.object.isRequired,
      periode_regions: PropTypes.object,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PlantsList;
