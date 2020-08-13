import { createStore, combineReducers } from "redux";
import reducer from "../reducers";

const rootReducer = combineReducers({
  ...reducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState());
export default store;