// import actions types
import {
  DISPLAY_PLANTS,
  SAVE_PLANTS,
  CHANGE_CALENDAR_MODE,
  SELECTED_REGION,
} from 'src/actions/visitorCalendar';

const initialState = {
  // == calendar view monthly
  view: 'month',
  // == day names on the top of the calendar
  daynames: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  // == first day of the week : Lundi
  startDayOfWeek: 1,
  // == layout calendar
  myTheme: {
    // == default color border #e5e5e5
    'common.border': '1px solid #f8cba9',

    // == default holiday color #ff4040 - other colors name #333
    'common.holiday.color': '#474647',

    // month header 'dayname'
    // default value 31px
    'month.dayname.height': '45px',

    // default value #e5e5e5
    'month.dayname.borderLeft': '1px solid #f8cba9',

    // default value inherit
    'month.dayname.backgroundColor': '#c1c1c1',

    // default value 12px
    'month.dayname.fontSize': '14px',

    // month day grid cell 'day'
    // default value rgba(255, 64, 64, 0.4)
    'month.holidayExceptThisMonth.color': '#f3c465',

    // default value gba(51, 51, 51, 0.4)
    'month.dayExceptThisMonth.color': '#f3c465',

    // default value 14px
    'month.day.fontSize': '15px',

    // month schedule style
    // default value 5px
    'month.schedule.borderRadius': '5px',

    // default value 24px
    'month.schedule.height': '25px',
  },
  // == List of regions
  plantsCalendars: [],
  // == List of plants
  plantsSchedules: [],
  // == impossible to click on the calendar or schedule
  isReadOnly: true,
  selected: false,
  isCalendarMode: false,
  // == Selected region
  selectedRegion: '',
  loading: true,
};

function visitorCalendarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY_PLANTS:
      return {
        ...state,
        selected: true,
      };

    case SAVE_PLANTS:
      return {
        ...state,
        plantsSchedules: action.plantsSchedules,
        loading: false,
      };

    case CHANGE_CALENDAR_MODE:
      return {
        ...state,
        isCalendarMode: action.value,
      };

    case SELECTED_REGION:
      return {
        ...state,
        selectedRegion: action.region,
      };

    default:
      return state;
  }
}

export default visitorCalendarReducer;
