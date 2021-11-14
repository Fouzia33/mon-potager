import axios from 'axios';

import {
  SUBMIT_LOGIN,
  saveUserData,
  SUBMIT_REGISTER,
  saveUserRegister,
  DELETE_SUBMIT,
  logOut,
} from '../actions/auth';

import {
  FETCH_USER_PLANTS,
  ADD_PLANT,
  saveUserPlants,
  saveNewPlant,
  DELETE_PLANT,
  plantToDelete,
} from '../actions/userCalendar';

const authMiddleware = (store) => (next) => (action) => {
  // == plant is the schedule created
  const { plant } = store.getState().userCalendar;

  // == plantSelected is to delete or update plant schedule
  const { plantSelected } = store.getState().userCalendar;

  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { userName, password } = store.getState().auth;

      axios.post(
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/jwt-auth/v1/token',
        {
          username: userName,
          password: password,
        },
      )
        .then((response) => {
          const newAction = saveUserData(
            response.data.token,
            response.data.user_display_name,
            response.data.logged,
          );
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('error connexion', error);
        });
      break;
    }
    case FETCH_USER_PLANTS:
      axios.get(
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-select',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          const apiDataUser = response.data.plantations;
          apiDataUser.map((data) => {
            data.id = data.id_plantation;
          });
          const newAction = saveUserPlants(apiDataUser);
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation select', error);
        });
      break;
    case ADD_PLANT:
      axios.post(
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-save',
        {
          // TODO : modify id_plante when user calendar will join to api data
          id_plante: Math.floor(Math.random() * 1000000),
          calendarId: plant.calendarId,
          category: 'allday',
          title: plant.title,
          start: JSON.stringify(plant.start).slice(10, 20),
          end: JSON.stringify(plant.end).slice(10, 20),
          color: plant.color,
          bgColor: plant.bgColor,
          dragBgColor: plant.dragBgColor,
          borderColor: plant.borderColor,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          const newPlant = [response.data];
          newPlant.map((data) => {
            data.id = data.id_plante;
          });
          const newAction = saveNewPlant(...newPlant);
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation save', error);
        });
      break;
    case DELETE_PLANT:
      axios.post(
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-delete',
        {
          id_plantation: plantSelected.id,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          const plantRemoved = response.data;
          const newAction = plantToDelete(plantRemoved);
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation save', error);
        });
      break;
    case SUBMIT_REGISTER: {
      const {
        username,
        password,
        confirmPassword,
        email,
        region,
      } = store.getState().register;

      axios.post(
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/inscription',
        {
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          email: email,
          region: region,
        },
      )
        .then((response) => {
          console.log(response);
          const newAction = saveUserRegister(
            response.data.token,
            response.data.user_display_name,
            response.data.signed,
          );
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('error inscription', error);
        });
      break;
    }
    case DELETE_SUBMIT: {
      axios.get(
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/user-delete',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(logOut());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default authMiddleware;
