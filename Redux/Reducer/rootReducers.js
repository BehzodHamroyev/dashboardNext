import { combineReducers } from "redux";
import globalReducer from './globalReducer'
import userReducer from './userReducer'
import photosReducer from './photosReducer'
import albumsReducer from './albumsReducer'
import postsReducer from './postsReducer'
import todosReducer from './todosReducer'
const reducers = combineReducers({
    globalReducer,
    userReducer,
    photosReducer,
    albumsReducer,
    postsReducer,
    todosReducer
})
export default reducers;