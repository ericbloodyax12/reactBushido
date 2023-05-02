import React, {Profiler} from 'react';

import './app.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


export function App() {
  return (
    <div className="app_wrapper">
     <Header/>
     <SideBar/>
        <div className={"app_content"}>
            <Profile/>
            <Dialogs/>
        </div>

    </div>
  );
}


