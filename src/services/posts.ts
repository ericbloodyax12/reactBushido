import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import React, {Dispatch} from "react";

export const getPosts = (setPosts: Dispatch<React.SetStateAction<PostDataType[] | undefined>>) => {
    fetch('https://jsonplaceholder.typicode.com/posts$')
        .then((res) => {
            console.log(res.url)
            if (!res.ok) {
                throw new Error(res.url)
            }
            console.log(res)
            return res.json() ;
        })
        .then((posts: PostDataType[]) => {
            console.log(posts)
            setPosts(posts)
        })
        .catch((er) => {
            console.log("er:",er.message)
            let fixedUrl = er.message.split("").filter((letter:string) => letter!=="$").join("")
            console.log("fixed:",fixedUrl)
            return fixedUrl
        })
        .then((fixedUrl) => {
            console.log("data:",fixedUrl)
            fetch(fixedUrl)
                .then((res) => res.json())
                .then((posts:PostDataType[]) => {
                    setPosts(posts)
                })
        })
}
export const getPosts2  = async () => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    return  await posts.json()
}
