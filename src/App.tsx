import React from 'react';

import './App.css';

export function App() {
  return (
    <div className="app_wrapper">
      <header className="app_header">
          <img className={"app_header-img"}
               src="https://techcrunch.com/wp-content/uploads/2016/11/icq-logo.png"
          />
      </header>
        <ul className={"app_ul"}>
            <li><a>Profile</a></li>
            <li><a>Friends</a></li>
            <li><a>New</a></li>
            <li><a>Settings</a></li>
        </ul>
      <div className={"app_content"}>
          <div>
              <img className={"app_content-img"}
                    src={"https://www.worldbusinessculture.com/wp-content/uploads/2018/05/Canada-2.jpg"}
              />
          </div>
          <div>
              ava+ description
          </div>
          <div>
              My posts
              <div>
                  New Post
              </div>
              <div>
                  Post1
              </div>
          </div>

      </div>
    </div>
  );
}


