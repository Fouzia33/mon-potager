import { connect } from 'react-redux';

// import component
import UserCalendar from 'src/components/UserCalendar';

// import actions creators
import {
  addPlant, newPlant, fetchUserPlants, deletePlant, selectPlant,
} from 'src/actions/userCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.userCalendar.view,
  daynames: state.userCalendar.daynames,
  startDayOfWeek: state.userCalendar.startDayOfWeek,
  myTheme: state.userCalendar.myTheme,
  userPlants: state.userCalendar.userPlants,
  plantsCalendars: state.userCalendar.plantsCalendars,
  isReadOnly: state.userCalendar.isReadOnly,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // == get new state plantsSchedules
  addPlant: () => {
    const action = addPlant();
    dispatch(action);
  },

  newPlant: (plant) => {
    const action = newPlant(plant);
    dispatch(action);
  },

  selectPlant: (plant) => {
    const action = selectPlant(plant);
    dispatch(action);
  },

  deletePlant: (plant) => {
    const action = deletePlant(plant);
    dispatch(action);
  },

  // == get new state plantsSchedules
  fetchUserPlants: () => {
    const action = fetchUserPlants();
    dispatch(action);
  },
}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(UserCalendar);
