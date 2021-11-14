import React, { createRef } from 'react';
import PropTypes from 'prop-types';

// == import components and containers
import PlantsListByRegion from 'src/containers/PlantsListByRegion';
import Loader from 'src/components/Loader';

// == import externals libraries
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

// picture for legend
import semer from 'src/assets/images/semer.png';
import planter from 'src/assets/images/planter.png';
import recolter from 'src/assets/images/recolter.png';
import arrow from 'src/assets/images/arrow.png';

// == Import css
import './visitorCalendar.scss';

// == VisitorCalendar Component
// == props from initial state visitorCalendarReducer
const VisitorCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  plantsSchedules,
  isReadOnly,
  plantsCalendars,
  selected,
  displayPlants,
  isCalendarMode,
  changeCalendarMode,
  getPlantsList,
  getSelectedRegion,
  selectedRegion,
  loading,
}) => {
  // == ref to current calendar to get instance and use buttons prev month, next month and today
  const calendarRef = createRef();
  // == current date to display on the top of calendar
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

    // == today() is a Toast Ui Calendar method to come back today
    calendarInstance.today();

    const getDate = document.querySelector('.visitorCalendar-currentMonth');

    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickPrevButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;

    // == prev() is a Toast Ui Calendar method to go to prev month
    calendarInstance.prev();

    const getDate = document.querySelector('.visitorCalendar-currentMonth');

    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;

    // == next() is a Toast Ui Calendar method to go to next month
    calendarInstance.next();

    const getDate = document.querySelector('.visitorCalendar-currentMonth');

    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  // == function to display plants by region
  const handleOptionSelect = (evt) => {
    // == selected become true and display calendar and make select region invisible
    displayPlants();

    const getOptionValue = evt.target.value;

    // get selected region and sent it to reducer
    getSelectedRegion(getOptionValue);

    // == isVisible allows to display plants by selected region
    // eslint-disable-next-line array-callback-return
    plantsSchedules.map((item) => {
      if (item.calendarId === getOptionValue) {
        item.isVisible = true;
      }
      else {
        item.isVisible = false;
      }
    });
  };

  return (
    <>
      {!selected && (
        <div className="intro">
          <p>Sélectionne ta région pour découvrir le calendrier du potager</p>
          <img
            src={arrow}
            alt="arrow"
            width="30"
            height="30"
          />
        </div>
      )}
      <div className="visitorCalendar">
        <select className="visitorCalendarSelectRegion" onChange={handleOptionSelect} value={selectedRegion}>
          <option className="option" value="">Choisis ta région!</option>
          <option className="option" value="6">Auvergne-Rhône-Alpes</option>
          <option className="option" value="7">Bourgogne-Franche-Comté</option>
          <option className="option" value="8">Bretagne</option>
          <option className="option" value="9">Centre-Val de Loire</option>
          <option className="option" value="10">Corse</option>
          <option className="option" value="11">Grand Est</option>
          <option className="option" value="12">Hauts-de-France</option>
          <option className="option" value="13">Île-de-France</option>
          <option className="option" value="14">Normandie</option>
          <option className="option" value="15">Nouvelle-Aquitaine</option>
          <option className="option" value="16">Occitanie</option>
          <option className="option" value="17">Pays de la Loire</option>
          <option className="option" value="18">Provence-Alpes-Côte d'Azur</option>
        </select>
        {loading && <Loader />}
        {selected && (
          <>
            <div className="toggle">
              <button
                className="menu-btn"
                type="button"
                onClick={() => {
                  changeCalendarMode(!isCalendarMode);
                }}
              >
                {isCalendarMode ? 'Désactiver' : 'Activer'} l'affichage en liste
              </button>
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
            {!isCalendarMode
              ? (
                <>
                  <div className="visitorCalendar-buttonsTodayMonth">
                    <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
                    <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>
                      <ChevronLeft size={12} />
                    </button>
                    <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>
                      <ChevronRight size={12} />
                    </button>
                    <p className="visitorCalendar-currentMonth">{currentMonthAndYear}</p>
                  </div>

                  <Calendar
                    // ==key for new render
                    key={selectedRegion}
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
                    schedules={plantsSchedules}
                    // == plants calendars data
                    calendars={plantsCalendars}
                    // == possible or not to click on calendar or schedules (boolean)
                    isReadOnly={isReadOnly}
                  />
                </>
              )
              : (
                <PlantsListByRegion
                  plantsSchedules={plantsSchedules}
                  getPlantsList={getPlantsList}
                />
              )}
          </>
        )}
      </div>
    </>
  );
};

VisitorCalendar.propTypes = {
  view: PropTypes.string.isRequired,
  daynames: PropTypes.array.isRequired,
  startDayOfWeek: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  displayPlants: PropTypes.func.isRequired,
  isCalendarMode: PropTypes.bool.isRequired,
  changeCalendarMode: PropTypes.func.isRequired,
  getPlantsList: PropTypes.func.isRequired,
  myTheme: PropTypes.object.isRequired,
  plantsSchedules: PropTypes.array.isRequired,
  plantsCalendars: PropTypes.array.isRequired,
  getSelectedRegion: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default VisitorCalendar;
