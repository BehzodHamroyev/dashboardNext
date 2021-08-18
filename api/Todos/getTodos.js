import axios from "axios"

const getTodos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
    }
}
export default getTodos