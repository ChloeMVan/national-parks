import React from 'react';
import './App.css';
import Home from './Pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import ActivityPage from "./Pages/ActivityPage";
import LiveParkList from "./components/LiveParkList";
import Activity from './components/Activity';
import GetParkCam from './components/GetParkCam';
import ErrorPage from './components/ErrorPage';


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/activity/:id/:name" element={<Activity />} />
      <Route path="/parkList" element={<LiveParkList />} />
      <Route path="/parkList/:parkCode/:fullName" element={<GetParkCam />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}


