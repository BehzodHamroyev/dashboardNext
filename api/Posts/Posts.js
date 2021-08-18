import axios from "axios"

const getPosts = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12");
        return { success: true, data: res.data }
    } catch (error) {

    }
}
export default getPosts;
