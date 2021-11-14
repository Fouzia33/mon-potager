import {
  SAVE_USER_PLANTS, SAVE_NEW_PLANT, NEW_PLANT, PLANT_TO_DELETE, SELECT_PLANT,
} from 'src/actions/userCalendar';

const initialState = {
  // == calendar view monthly
  view: 'month',
  // == day names on the top of the calendar
  daynames: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  // == first day of the week : Lundi
  startDayOfWeek: 1,
  // == calendar layout
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
  plantsCalendars: [
    {
      id: '1',
      name: 'Semi',
      color: '#474647',
      bgColor: '#f3c465',
      dragBgColor: '#daece5',
      borderColor: '#fad689',
    },
    {
      id: '2',
      name: 'Plantation',
      color: '#474647',
      bgColor: '#f46d5f',
      dragBgColor: '#daece5',
      borderColor: '#e4bd9f',
    },
    {
      id: '3',
      name: 'Récolte',
      color: '#474647',
      bgColor: '#9ed2bf',
      dragBgColor: '#daece5',
      borderColor: '#daece5',
    },
  ],
  // == List of plants
  userPlants: [],

  // == Plant created
  plant: {},

  // == plant selected on click
  plantSelected: {},

  // == to click on the calendar
  isReadOnly: false,
};

function userCalendarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_PLANT: {
      return {
        ...state,
        plant: action.plant,
      };
    }

    case PLANT_TO_DELETE: {
      return {
        ...state,
        // == userPlants === userPlants except plant to remove
        userPlants: state.userPlants.filter((item) => item.id !== action.plant.id_plantation),
      };
    }

    case SELECT_PLANT: {
      return {
        ...state,
        plantSelected: action.plant,
      };
    }

    case SAVE_USER_PLANTS:
      return {
        ...state,
        userPlants: action.userPlants,
      };

    case SAVE_NEW_PLANT:
      return {
        ...state,
        userPlants: [...state.userPlants, action.plant],
      };

    default:
      return state;
  }
}

export default userCalendarReducer;
