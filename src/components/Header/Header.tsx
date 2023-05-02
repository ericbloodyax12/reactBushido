import React from 'react';
import "./header.css";
import headerImage from './header.png';
export function Header(props: any) {

    return (
            <header className="app_header">
                <img className={"app_header-img"}
                     src={headerImage}
                />
            </header>
    );
}

