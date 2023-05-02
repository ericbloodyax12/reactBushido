import React, {useEffect, useState} from 'react';
import "./myPosts.css";
import {Post, PostPropsType} from "./Post/Post";
import {getRandomInt, postMessage} from "./Post/data";

export type MyPostsPropsType  = {

}
type PostDataType = {
    "postId": number,
    "id": number,
    "name":  string,
    "email": string ,
    "body": string
}
export function MyPosts(props: MyPostsPropsType) {

    const [posts,setPosts] = useState<Array<PostDataType> | undefined>(undefined);

    useEffect(() => {
        console.log("в юс эфекте")
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((json:PostDataType[]) => {
            const filtredPosts = json.filter((el) => {
                return  el.postId === 1
            })
            setPosts(filtredPosts)
        })
    },[])
    console.log("в самой компанента перед ретерном")
    return (
        <div>
            My posts
            <div>
                New Post
            </div>
            {posts?.map((el) => {
                return  <Post key={el.id} message={el.body} likes={`${getRandomInt(11)} likes`}/>
            })}

        </div>
    );
}

