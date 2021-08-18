import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import setAlbums from '../Redux/Action/albumsAction'

const Albums = () => {
    useEffect(() => {
        setAlbums()
    }, [])
    const data = useSelector(state => state.albumsReducer.data)
console.log(data)
    return (
        <div className="container text-center">
            <h1>Albums</h1>
            {
                data?.map((v, i) => {
                    return <p key={i}>{v.id}</p>
                })
            }
        </div>
    )
}

export default Albums
