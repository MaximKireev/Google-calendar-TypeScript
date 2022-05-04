import React from 'react';
import {Routes, Route} from 'react-router-dom'
import App from './App'

// import {DayView} from '../components/main_content/DayView.jsx'
// import MonthPage from "../pages/MonthPage";
// import EventCreatorWindow from '../components/eventCreator/EventCreatorWindow.jsx'
import './index.css'

// TODO: using EventCreatorWindow popup in the router is a very bad idea, it has no right to exist

const Router = () => {
  return (
    <Routes>
      <Route path = '/' element = {<App />}/>
      {/* <Route path = 'month' element = {<MonthPage />} />
      <Route path = '/day' element = {<DayView />}/>  */}
    </Routes>
  )
}

export default Router;

// calendar/:year/:month/:day
// calendar/:1985/:07/:23
// calendar/:1985/:07
// calendar/:1985

// calendar/:year/:month/:day
// calendar/:1985/:07/:23
// calendar/:1985/:07
// calendar/:1985

// calendar/:year/:month/:day
// calendar/:1985/:07/:23
// calendar/:1985/:07
// calendar/:1985