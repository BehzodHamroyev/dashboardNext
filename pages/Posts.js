import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import setPosts from '../Redux/Action/postsAction'

const Posts = () => {
    useEffect(() => {
     setPosts()
    }, [])
    const data = useSelector(state => state.postsReducer.data)
    return (
        <div className="container text-center">
            <h1>Posts</h1>
            {
                data.map((v,i)=>{
                    return <p key={i}></p>
                })
            }
        </div>
    )
}

export default Posts
