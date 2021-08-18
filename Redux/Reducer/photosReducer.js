import { SET_PHOTOS } from "../type";
const initialState = {
    data: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS: return { ...state, data: action.payload }
        default: return {...state};
    }
}
export default reducer