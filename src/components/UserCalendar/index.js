import React, { createRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// == import externals libraries
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

// Pictures
import semer from 'src/assets/images/semer.png';
import planter from 'src/assets/images/planter.png';
import recolter from 'src/assets/images/recolter.png';

// == Import css
import './userCalendar.scss';

// == UserCalendar Component
const UserCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  userPlants,
  isReadOnly,
  plantsCalendars,
  fetchUserPlants,
  newPlant,
  addPlant,
  deletePlant,
  selectPlant,
}) => {
  // == ref to current calendar :
  // == use calendarRef to get instance and to change month et come back today
  const calendarRef = createRef();

  useEffect(() => {
    fetchUserPlants();
  }, []);

  // == today's date
  const currentDate = new Date();
  // == Format the date to see just month and year, and change timezone to Paris
  const currentMonthAndYear = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'long',
  });

  // == functions to dynamise buttons today prev and next month
  const handleClickTodayButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;

    // == today() is a Toast Ui Calendar Method
    calendarInstance.today();

    const getDate = document.querySelector('.userCalendar-currentMonth');

    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickPrevButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;

    // == prev() is a Toast Ui Calendar Method
    calendarInstance.prev();
  
    const getDate = document.querySelector('.userCalendar-currentMonth');

    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;

    // == prev() is a Toast Ui Calendar Method
    calendarInstance.next();

    const getDate = document.querySelector('.userCalendar-currentMonth');

    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  // == this method will become a prop in Calendar component
  // == method to get plant schedule on click
  const onClickSchedule = useCallback((e) => {
    // == plant selected on click, sent to reducer
    selectPlant(e.schedule);
  }, []);

  // == this method will become a prop in Calendar component
  // == method to create plant schedule
  const onBeforeCreateSchedule = useCallback((scheduleData) => {
    let schedule = {};
    
    if (scheduleData.calendarId === '1') {
      schedule = {
        id: String(Math.random()),
        calendarId: '1',
        title: scheduleData.title,
        start: scheduleData.start,
        end: scheduleData.end,
        raw: {
          class: scheduleData.raw.class,
        },
        color: '#474647',
        bgColor: '#f3c465',
        dragBgColor: '#daece5',
        borderColor: '#fad689',
      };
    }
    else if (scheduleData.calendarId === '2') {
      schedule = {
        id: String(Math.random()),
        calendarId: '2',
        title: scheduleData.title,
        start: scheduleData.start,
        end: scheduleData.end,
        raw: {
          class: scheduleData.raw.class,
        },
        color: '#474647',
        bgColor: '#f46d5f',
        dragBgColor: '#daece5',
        borderColor: '#e4bd9f',
      };
    }
    else if (scheduleData.calendarId === '3') {
      schedule = {
        id: String(Math.random()),
        calendarId: '3',
        title: scheduleData.title,
        start: scheduleData.start,
        end: scheduleData.end,
        raw: {
          class: scheduleData.raw.class,
        },
        color: '#474647',
        bgColor: '#9ed2bf',
        dragBgColor: '#daece5',
        borderColor: '#daece5',
      };
    }

    // == auto calendar harvest if schedule.calendarId === 1 || === 2
    const scheduleDateStart = new Date(schedule.start);
    scheduleDateStart.setMonth(scheduleDateStart.getMonth() + 1);
    const scheduleDateEnd = new Date(schedule.end);
    scheduleDateEnd.setMonth(scheduleDateEnd.getMonth() + 1);

    let schedule2 = {};
    if (schedule.calendarId === '1' || schedule.calendarId === '2') {
      schedule2 = {
        id: String(Math.random()),
        calendarId: '3',
        title: schedule.title,
        start: { dates: scheduleDateStart },
        end: { dates: scheduleDateEnd },
        raw: {
          class: schedule.raw.class,
        },
        color: '#474647',
        bgColor: '#9ed2bf',
        dragBgColor: '#daece5',
        borderColor: '#daece5',
      };
    }

    // == add the new plant to reducer (semi or plant)
    newPlant(schedule);
    // == save new plant in db and add new plant to userPlants
    addPlant();
    // == add the new plant to reducer (harvest)
    newPlant(schedule2);
    // == save new plant in db and add new plant to userPlants
    addPlant();
  }, []);

   // == this method will become a prop in Calendar component
  // == method to delete plant schedule selected
  const onBeforeDeleteSchedule = useCallback((res) => {
     // == delete plant selected
     deletePlant(res); 
  }, []);

  // == this method will become a prop in Calendar component
  const onBeforeUpdateSchedule = useCallback((e) => {
    console.log(e);
    // TODO : update schedule of plant
    // const { schedule, changes } = e;

    // calendarRef.current.calendarInst.updateSchedule(
    
  }, []);
  return (
    <div className="userCalendar">
      <div className="userCalendar-buttonsTodayMonth">
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>
          <ChevronLeft size={12} />
        </button>
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>
          <ChevronRight size={12} />
        </button>
        <p className="userCalendar-currentMonth">{currentMonthAndYear}</p>
      </div>
      <div className="legend">
        <div className="sowing">
          <img
            src={semer}
            alt="semis"
            width="30"
          />
        </div>
        <div className="planting">
          <img
            src={planter}
            alt="semis"
            width="30"
          />
        </div>
        <div className="harvest">
          <img
            src={recolter}
            alt="semis"
            width="30"
          />
        </div>
      </div>
      <Calendar
        // == ref to current calendar
        ref={calendarRef}
        // == view monthly
        view={view}
        // == calendar options
        month={{
          daynames: daynames,
          startDayOfWeek: startDayOfWeek,
        }}
         // == layout calendar and schedules
        theme={myTheme}
        // == plants schedules data
        schedules={userPlants}
        // == plants calendars data
        calendars={plantsCalendars}
        // == calendar is read only
        isReadOnly={isReadOnly}
        // == use default popup toas ui calendar
        useCreationPopup
        useDetailPopup
        onClickSchedule={onClickSchedule}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      />
    </div>
  );
};

UserCalendar.propTypes = {
  view: PropTypes.string.isRequired,
  daynames: PropTypes.array.isRequired,
  startDayOfWeek: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  myTheme: PropTypes.object.isRequired,
  plantsCalendars: PropTypes.array.isRequired,
  addPlant: PropTypes.func.isRequired,
  fetchUserPlants: PropTypes.func.isRequired,
  newPlant: PropTypes.func.isRequired,
  userPlants: PropTypes.array.isRequired,
  deletePlant: PropTypes.func.isRequired,
  selectPlant: PropTypes.func.isRequired,
};

// == Export
export default UserCalendar;
