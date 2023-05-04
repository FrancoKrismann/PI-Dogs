import { createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';

// const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;