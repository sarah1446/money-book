import { createStore, combineReducers } from "redux";
import reducer from "../reducers";

const rootReducer = combineReducers({
  ...reducer
});

const store = createStore(rootReducer);
console.log(store.getState());
export default store;