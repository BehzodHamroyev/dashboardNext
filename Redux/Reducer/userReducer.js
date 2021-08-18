import { SET_USERS } from '../type';
const initialState = {
    data: []
}
const reuducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_USERS: return { ...state, data: action.payload }
        default: return { ...state };

    }
}

export default reuducer
