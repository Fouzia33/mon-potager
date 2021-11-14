// === action types

// == to create user plant schedule
// == (type in userCalendarReducer and creator in UserCalendar container)
export const NEW_PLANT = 'NEW_PLANT';

// == post the new plant to middleware
// == (type in authMiddleware and creator in UserCalendar container)
export const ADD_PLANT = 'ADD_PLANT';

// == add new plant to userPlants in reducer
// == (type in userCalendarReducer and creator in authMiddleware)
export const SAVE_NEW_PLANT = 'SAVE_NEW_PLANT';

// == plant selected by click
// == (type in userCalendarReducer and creator in UserCalendar container)
export const SELECT_PLANT = 'SELECT_PLANT';

// == info plant selected to delete sent to api and dispatch to reducer
// == (type in userCalendarReducer and creator in authMiddleware)
export const PLANT_TO_DELETE = 'PLANT_TO_DELETE';

// == (type in authMiddleware and creator in UserCalendar container)
export const DELETE_PLANT = 'DELETE_PLANT';

// == load userPlants
// == (type in authMiddlewanre and creator in UserCalendar container)
export const FETCH_USER_PLANTS = 'FETCH_USER_PLANTS';

// == (type in userCalendarReducer and creator in authMiddleware)
export const SAVE_USER_PLANTS = 'SAVE_USER_PLANTS';

// === action creators
export const newPlant = (plant) => ({
  type: NEW_PLANT,
  plant,
});

export const addPlant = () => ({
  type: ADD_PLANT,
});

export const saveNewPlant = (plant) => ({
  type: SAVE_NEW_PLANT,
  plant,
});

export const selectPlant = (plant) => ({
  type: SELECT_PLANT,
  plant,
});

export const plantToDelete = (plant) => ({
  type: PLANT_TO_DELETE,
  plant,
});

export const deletePlant = (plant) => ({
  type: DELETE_PLANT,
  plant,
});

export const fetchUserPlants = () => ({
  type: FETCH_USER_PLANTS,
});

export const saveUserPlants = (userPlants) => ({
  type: SAVE_USER_PLANTS,
  userPlants,
});
