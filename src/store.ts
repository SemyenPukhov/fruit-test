import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import fruitReducer from "./reducers/fruitReducer";

export default createStore(fruitReducer, applyMiddleware(thunk));
