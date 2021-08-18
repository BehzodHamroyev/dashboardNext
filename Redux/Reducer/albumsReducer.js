import { SET_ALBUMS } from "../type";
const initialState = {
    data: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS: return { ...state, data: action.payload }
        default: return { ...state }

    }

}
export default reducer;