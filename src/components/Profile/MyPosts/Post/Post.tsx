import React from 'react';
import "./Post.css";

export type PostPropsType  = {
    message: string
}
export function Post(props: PostPropsType) {

    return (
        <div>
            <img className={"post-img"} src={"https://m.buro247.ru/images/leonardo-di-caprio-ruling-wall-street.jpg"}
            />  {props.message}
            <div>
                <span>1 likes</span>
            </div>

        </div>
    );
}

