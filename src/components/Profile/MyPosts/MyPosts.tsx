import React, {useEffect, useState} from 'react';
import "./MyPosts.css";
import {Post, PostPropsType} from "./Post/Post";
import {postMessage} from "./Post/data";

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
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((json:PostDataType[]) => {
            const filtredPosts = json.filter((el) => {
                return  el.postId === 1
            })
            setPosts(filtredPosts)
        })
    },[])

    return (
        <div>
            My posts
            <div>
                New Post
            </div>
            {posts?.map((el) => {
                return  <Post key={el.id} message={el.body}/>
            })}

        </div>
    );
}

