import axios from 'axios'
import React from 'react'

const getPhotos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=12");
        return { success: true, data: res.data }

    } catch (error) {
        console.error(error);

    }
}

export default getPhotos
