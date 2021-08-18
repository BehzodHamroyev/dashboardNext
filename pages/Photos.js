import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import setPhotos from '../Redux/Action/photosAction'

const Photos = () => {
    useEffect(() => {
     setPhotos()
    }, [])
    const data = useSelector(state=>state.photosReducer.data)
    return (
        <div className="container text-center">
            <h1 className="text-center">Photos</h1>
        <div className="row">
                {
                    data.map((v, i) => {
                        return <div className="col-md-4"><img key={i} src={v.url} className="w-100" alt="" /></div>
                    })
                }
        </div>
        </div>
    )
}

export default Photos
