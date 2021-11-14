import { connect } from 'react-redux';

// import component
import VisitorCalendar from 'src/components/VisitorCalendar';
import PlantsListByRegion from 'src/components/PlantsListByRegion';

// import actions creators
import {
  displayPlants,
  changeCalendarMode,
  getSelectedRegion,
} from 'src/actions/visitorCalendar';

import { getPlantsList } from 'src/actions/plantsList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.visitorCalendar.view,
  daynames: state.visitorCalendar.daynames,
  startDayOfWeek: state.visitorCalendar.startDayOfWeek,
  myTheme: state.visitorCalendar.myTheme,
  plantsSchedules: state.visitorCalendar.plantsSchedules,
  plantsCalendars: state.visitorCalendar.plantsCalendars,
  isReadOnly: state.visitorCalendar.isReadOnly,
  selected: state.visitorCalendar.selected,
  isCalendarMode: state.visitorCalendar.isCalendarMode,
  plants: state.plants.plants,
  selectedRegion: state.visitorCalendar.selectedRegion,
  loading: state.visitorCalendar.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // display all plants
  displayPlants: () => {
    const action = displayPlants();
    dispatch(action);
  },
  // toggle to change display on list
  changeCalendarMode: (newValue) => {
    const action = changeCalendarMode(newValue);
    dispatch(action);
  },

  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },

  getSelectedRegion: (region) => {
    const action = getSelectedRegion(region);
    dispatch(action);
  },
}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCalendar, PlantsListByRegion);
