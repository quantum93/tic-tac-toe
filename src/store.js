import { createStore } from "redux";
import rootReducer from "./reducers";
import fillsquares from './reducers/fillsquares';

export default createStore(fillsquares);
