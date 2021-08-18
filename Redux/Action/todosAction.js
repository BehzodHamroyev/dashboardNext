import getTodos from "../../api/Todos/getTodos"
import { dispatch } from "../Store/store";
import { SET_TODOS } from "../type";

const setTodos = async () => {
    const res = await getTodos();
    const action = { type: SET_TODOS, payload: res.data }
    dispatch(action)
}
export default setTodos;