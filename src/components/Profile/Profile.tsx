import React from 'react';
import "./Profile.css";
import {MyPosts} from "./MyPosts/MyPosts";
export function Profile(props: any) {

    return (
        <div className={"app_content"}>
            <div>
                <img className={"app_content-img"}
                     src={"https://www.worldbusinessculture.com/wp-content/uploads/2018/05/Canada-2.jpg"}
                />
            </div>
            <div>
                ava+ description
            </div>
            <MyPosts/>
        </div>
    );
}

