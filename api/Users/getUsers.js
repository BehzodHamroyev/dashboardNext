import axios from "axios"

const getUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res);
        return { success: true, data: res.data }
    } catch (error) {
        console.log(error);
    }
}
export default getUsers;