import { SET_TODOS } from "../type";

const initialState = {
    data: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: return { ...state, data: action.payload }
        default:return{...state}
    }
}
export default reducer