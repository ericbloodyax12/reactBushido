import React, {useEffect, useState} from 'react';
import "./myPosts.css";
import {Post, PostPropsType} from "./Post/Post";
import {getRandomInt, postMessage} from "./Post/data";
import {getPosts, getPosts2} from "../../../services/posts";

export type MyPostsPropsType  = {

}
export type PostDataType = {
    "id": number,
    "title": string ,
    "body": string,
    "userId": number
}


export function MyPosts(props: MyPostsPropsType) {

    const [posts,setPosts] = useState<Array<PostDataType> | undefined>(undefined);


    useEffect(  () =>  {
       async function fetchData() {
            try {
                const posts = await getPosts2()
                setPosts(posts)
            } catch (error) {
                console.log('Ошибка:', error);
            }
        }
        fetchData()
    },[])
    return (
        <div>
            My posts
            <div>
                New Post
            </div>
            {posts?.map((el) => {
                return  <Post key={el.id} message={el.title} likes={`${getRandomInt(11)} likes`}/>
            })}

        </div>
    );
}

