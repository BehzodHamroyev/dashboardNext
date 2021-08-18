import axios from "axios"

const getAlbums = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums?_limit=12");
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
    }
}
export default getAlbums