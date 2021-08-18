import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from '../Reducer/rootReducers'
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...[thunk]))
)

const dispatch = store.dispatch;
console.log(dispatch);
export { dispatch };
export default store;