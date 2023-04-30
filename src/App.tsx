import React, {Profiler} from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Profile} from "./components/Profile/Profile";


export function App() {
  return (
    <div className="app_wrapper">
     <Header/>
     <SideBar/>
     <Profile/>
    </div>
  );
}


