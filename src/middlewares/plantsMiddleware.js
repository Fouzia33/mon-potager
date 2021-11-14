/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const regionId = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']; // dynamiser regionId si on a le temps
const plantsMiddleware = (store) => (next) => (action) => {
  const apiPlants = []; // plants from api loop to iterate regions
  switch (action.type) {
    case FETCH_PLANTS: {
      // loop by region
      for (let calendarId = 0; calendarId < regionId.length; calendarId += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?_embed=true&per_page=100&regions=${regionId[calendarId]}`)
          .then((response) => {
            const apiData = response.data;
            // eslint-disable-next-line array-callback-return
            apiData.map((plant) => {
              plant.calendarId = regionId[calendarId];
              plant.id = JSON.stringify(plant.id);
              plant.title = plant.title.rendered;
              plant.category = 'time';
              plant.isVisible = false;
              apiPlants.push(plant);
            });
            // TODO : fix bug - plant with no date display on today

            // apiPlants deep clone - get data by semi period
            const semiPlants = JSON.parse(JSON.stringify(apiPlants));

            // eslint-disable-next-line array-callback-return
            semiPlants.map((semi) => {
              if (semi.calendarId === '6') {
                if (semi.periode_regions.debut_semi_auvergne[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_auvergne[0];
                  semi.end = semi.periode_regions.fin_semi_auvergne[0];
                  semi.month = semi.periode_regions['debut_semi-month_auvergne'];
                }
              }
              else if (semi.calendarId === '7') {
                if (semi.periode_regions.debut_semi_bourgogne[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_bourgogne[0];
                  semi.end = semi.periode_regions.fin_semi_bourgogne[0];
                  semi.month = semi.periode_regions['debut_semi-month_bourgogne'];
                }
              }
              else if (semi.calendarId === '8') {
                if (semi.periode_regions.debut_semi_bretagne[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_bretagne[0];
                  semi.end = semi.periode_regions.fin_semi_bretagne[0];
                  semi.month = semi.periode_regions['debut_semi-month_bretagne'];
                }
              }
              else if (semi.calendarId === '9') {
                if (semi.periode_regions.debut_semi_centre[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_centre[0];
                  semi.end = semi.periode_regions.fin_semi_centre[0];
                  semi.month = semi.periode_regions['debut_semi-month_centre'];
                }
              }
              else if (semi.calendarId === '10') {
                if (semi.periode_regions.debut_semi_corse[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_corse[0];
                  semi.end = semi.periode_regions.fin_semi_corse[0];
                  semi.month = semi.periode_regions['debut_semi-month_corse'];
                }
              }
              else if (semi.calendarId === '11') {
                if (semi.periode_regions.debut_semi_est[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_est[0];
                  semi.end = semi.periode_regions.fin_semi_est[0];
                  semi.month = semi.periode_regions['debut_semi-month_est'];
                }
              }
              else if (semi.calendarId === '12') {
                if (semi.periode_regions.debut_semi_hauts[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_hauts[0];
                  semi.end = semi.periode_regions.fin_semi_hauts[0];
                  semi.month = semi.periode_regions['debut_semi-month_hauts'];
                }
              }
              else if (semi.calendarId === '13') {
                if (semi.periode_regions.debut_semi_ile[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_ile[0];
                  semi.end = semi.periode_regions.fin_semi_ile[0];
                  semi.month = semi.periode_regions['debut_semi-month_ile'];
                }
              }
              else if (semi.calendarId === '14') {
                if (semi.periode_regions.debut_semi_normandie[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_normandie[0];
                  semi.end = semi.periode_regions.fin_semi_normandie[0];
                  semi.month = semi.periode_regions['debut_semi-month_normandie'];
                }
              }
              else if (semi.calendarId === '15') {
                if (semi.periode_regions.debut_semi_aquitaine[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_aquitaine[0];
                  semi.end = semi.periode_regions.fin_semi_aquitaine[0];
                  semi.month = semi.periode_regions['debut_semi-month_aquitaine'];
                }
              }
              else if (semi.calendarId === '16') {
                if (semi.periode_regions.debut_semi_occitanie[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_occitanie[0];
                  semi.end = semi.periode_regions.fin_semi_occitanie[0];
                  semi.month = semi.periode_regions['debut_semi-month_occitanie'];
                }
              }
              else if (semi.calendarId === '17') {
                if (semi.periode_regions.debut_semi_loire[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_loire[0];
                  semi.end = semi.periode_regions.fin_semi_loire[0];
                  semi.month = semi.periode_regions['debut_semi-month_loire'];
                }
              }
              else if (semi.calendarId === '18') {
                if (semi.periode_regions.debut_semi_azur[0] === '') {
                  semi.start = '1940-01-01';
                }
                else {
                  semi.start = semi.periode_regions.debut_semi_azur[0];
                  semi.end = semi.periode_regions.fin_semi_azur[0];
                  semi.month = semi.periode_regions['debut_semi-month_azur'];
                }
              }
              semi.period = 'semi';
              semi.color = '#474647';
              semi.bgColor = '#f3c465';
              semi.borderColor = '#fad689';
            });

            // apiPlants deep clone - get data by plantation period
            const plantationPlants = JSON.parse(JSON.stringify(apiPlants));

            // eslint-disable-next-line array-callback-return
            plantationPlants.map((plant) => {
              if (plant.calendarId === '6') {
                if (plant.periode_regions.debut_plant_auvergne[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_auvergne[0];
                  plant.end = plant.periode_regions.fin_plant_auvergne[0];
                  plant.month = plant.periode_regions['debut_plant-month_auvergne'];
                }
              }
              else if (plant.calendarId === '7') {
                if (plant.periode_regions.debut_plant_bourgogne[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_bourgogne[0];
                  plant.end = plant.periode_regions.fin_plant_bourgogne[0];
                  plant.month = plant.periode_regions['debut_plant-month_bourgogne'];
                }
              }
              else if (plant.calendarId === '8') {
                if (plant.periode_regions.debut_plant_bretagne[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_bretagne[0];
                  plant.end = plant.periode_regions.fin_plant_bretagne[0];
                  plant.month = plant.periode_regions['debut_plant-month_bretagne'];
                }
              }
              else if (plant.calendarId === '9') {
                if (plant.periode_regions.debut_plant_centre[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_centre[0];
                  plant.end = plant.periode_regions.fin_plant_centre[0];
                  plant.month = plant.periode_regions['debut_plant-month_centre'];
                }
              }
              else if (plant.calendarId === '10') {
                if (plant.periode_regions.debut_plant_corse[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_corse[0];
                  plant.end = plant.periode_regions.fin_plant_corse[0];
                  plant.month = plant.periode_regions['debut_plant-month_corse'];
                }
              }
              else if (plant.calendarId === '11') {
                if (plant.periode_regions.debut_plant_est[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_est[0];
                  plant.end = plant.periode_regions.fin_plant_est[0];
                  plant.month = plant.periode_regions['debut_plant-month_est'];
                }
              }
              else if (plant.calendarId === '12') {
                if (plant.periode_regions.debut_plant_hauts[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_hauts[0];
                  plant.end = plant.periode_regions.fin_plant_hauts[0];
                  plant.month = plant.periode_regions['debut_plant-month_hauts'];
                }
              }
              else if (plant.calendarId === '13') {
                if (plant.periode_regions.debut_plant_ile[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_ile[0];
                  plant.end = plant.periode_regions.fin_plant_ile[0];
                  plant.month = plant.periode_regions['debut_plant-month_ile'];
                }
              }
              else if (plant.calendarId === '14') {
                if (plant.periode_regions.debut_plant_normandie[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_normandie[0];
                  plant.end = plant.periode_regions.fin_plant_normandie[0];
                  plant.month = plant.periode_regions['debut_plant-month_normandie'];
                }
              }
              else if (plant.calendarId === '15') {
                if (plant.periode_regions.debut_plant_aquitaine[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_aquitaine[0];
                  plant.end = plant.periode_regions.fin_plant_aquitaine[0];
                  plant.month = plant.periode_regions['debut_plant-month_aquitaine'];
                }
              }
              else if (plant.calendarId === '16') {
                if (plant.periode_regions.debut_plant_occitanie[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_occitanie[0];
                  plant.end = plant.periode_regions.fin_plant_occitanie[0];
                  plant.month = plant.periode_regions['debut_plant-month_occitanie'];
                }
              }
              else if (plant.calendarId === '17') {
                if (plant.periode_regions.debut_plant_loire[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_loire[0];
                  plant.end = plant.periode_regions.fin_plant_loire[0];
                  plant.month = plant.periode_regions['debut_plant-month_loire'];
                }
              }
              else if (plant.calendarId === '18') {
                if (plant.periode_regions.debut_plant_azur[0] === '') {
                  plant.start = '1940-01-01';
                }
                else {
                  plant.start = plant.periode_regions.debut_plant_azur[0];
                  plant.end = plant.periode_regions.fin_plant_azur[0];
                  plant.month = plant.periode_regions['debut_plant-month_azur'];
                }
              }
              plant.period = 'plantation';
              plant.color = '#474647';
              plant.bgColor = '#f46d5f';
              plant.borderColor = '#e4bd9f';
            });
            // apiPlants deep clone - get data by harvest period
            const harvestPlants = JSON.parse(JSON.stringify(apiPlants));

            // eslint-disable-next-line array-callback-return
            harvestPlants.map((harvest) => {
              if (harvest.calendarId === '6') {
                if (harvest.periode_regions.debut_recolte_auvergne[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_auvergne[0];
                  harvest.end = harvest.periode_regions.fin_recolte_auvergne[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_auvergne'];
                }
              }
              else if (harvest.calendarId === '7') {
                if (harvest.periode_regions.debut_recolte_bourgogne[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_bourgogne[0];
                  harvest.end = harvest.periode_regions.fin_recolte_bourgogne[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_bourgogne'];
                }
              }
              else if (harvest.calendarId === '8') {
                if (harvest.periode_regions.debut_recolte_bretagne[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_bretagne[0];
                  harvest.end = harvest.periode_regions.fin_recolte_bretagne[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_bretagne'];
                }
              }
              else if (harvest.calendarId === '9') {
                if (harvest.periode_regions.debut_recolte_centre[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_centre[0];
                  harvest.end = harvest.periode_regions.fin_recolte_centre[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_centre'];
                }
              }
              else if (harvest.calendarId === '10') {
                if (harvest.periode_regions.debut_recolte_corse[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_corse[0];
                  harvest.end = harvest.periode_regions.fin_recolte_corse[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_corse'];
                }
              }
              else if (harvest.calendarId === '11') {
                if (harvest.periode_regions.debut_recolte_est[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_est[0];
                  harvest.end = harvest.periode_regions.fin_recolte_est[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_est'];
                }
              }
              else if (harvest.calendarId === '12') {
                if (harvest.periode_regions.debut_recolte_hauts[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_hauts[0];
                  harvest.end = harvest.periode_regions.fin_recolte_hauts[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_hauts'];
                }
              }
              else if (harvest.calendarId === '13') {
                if (harvest.periode_regions.debut_recolte_ile[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_ile[0];
                  harvest.end = harvest.periode_regions.fin_recolte_ile[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_ile'];
                }
              }
              else if (harvest.calendarId === '14') {
                if (harvest.periode_regions.debut_recolte_normandie[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_normandie[0];
                  harvest.end = harvest.periode_regions.fin_recolte_normandie[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_normandie'];
                }
              }
              else if (harvest.calendarId === '15') {
                if (harvest.periode_regions.debut_recolte_aquitaine[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_aquitaine[0];
                  harvest.end = harvest.periode_regions.fin_recolte_aquitaine[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_aquitaine'];
                }
              }
              else if (harvest.calendarId === '16') {
                if (harvest.periode_regions.debut_recolte_occitanie[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_occitanie[0];
                  harvest.end = harvest.periode_regions.fin_recolte_occitanie[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_occitanie'];
                }
              }
              else if (harvest.calendarId === '17') {
                if (harvest.periode_regions.debut_recolte_loire[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_loire[0];
                  harvest.end = harvest.periode_regions.fin_recolte_loire[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_loire'];
                }
              }
              else if (harvest.calendarId === '18') {
                if (harvest.periode_regions.debut_recolte_azur[0] === '') {
                  harvest.start = '1940-01-01';
                }
                else {
                  harvest.start = harvest.periode_regions.debut_recolte_azur[0];
                  harvest.end = harvest.periode_regions.fin_recolte_azur[0];
                  harvest.month = harvest.periode_regions['debut_recolte-month_azur'];
                }
              }
              harvest.period = 'recolte';
              harvest.color = '#474647';
              harvest.bgColor = '#9ed2bf';
              harvest.borderColor = '#daece5';
            });

            const apiPlantsSchedules = [
              ...semiPlants,
              ...plantationPlants,
              ...harvestPlants,
            ];

            // == put api data in plantsSchedules
            const newAction = savePlants(apiPlantsSchedules);
            store.dispatch(newAction);
            // console.log(newAction);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }
      break;
    }
    default:
  }
  // action to next middleware or reducer
  next(action);
};

export default plantsMiddleware;
