// === action types

// == to display plants when you select region
// == (type in visitorCalendarReducer and creator in VisitorCalendar container)
export const DISPLAY_PLANTS = 'DISPLAY_PLANTS';

// == load plants from api and save plants in reducer
// == (type in plantsMiddleware and creator in App container)
export const FETCH_PLANTS = 'FETCH_PLANTS';

// == (type in visitorCalendarReducer and creator in plantsMiddleware)
export const SAVE_PLANTS = 'SAVE_PLANTS';

// == send selected region to reducer
// == (type in visitorCalendar and creator in VisitorCalendar container)
export const SELECTED_REGION = 'SELECTED_REGION';

// == toggle to change display
export const CHANGE_CALENDAR_MODE = 'CHANGE_CALENDAR_MODE';

export const displayPlants = () => ({
  type: DISPLAY_PLANTS,
});

export const fetchPlants = () => ({
  type: FETCH_PLANTS,
});

export const savePlants = (plantsSchedules) => ({
  type: SAVE_PLANTS,
  plantsSchedules: plantsSchedules,
});

export const changeCalendarMode = (value) => ({
  type: CHANGE_CALENDAR_MODE,
  value,
});

export const getSelectedRegion = (region) => ({
  type: SELECTED_REGION,
  region,
});
