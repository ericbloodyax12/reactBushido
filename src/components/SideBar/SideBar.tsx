import React from 'react';
import "./SideBar.css";
export function SideBar(props: any) {

    return (
        <div className={"app_sideBar"} >
            <ul className={"app_sideBar-ul"}>
                <li><a>Profile</a></li>
                <li><a>Friends</a></li>
                <li><a>New</a></li>
                <li><a>Settings</a></li>
            </ul>
        </div>
    );
}

