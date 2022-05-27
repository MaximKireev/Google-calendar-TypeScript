import { createStore } from "redux";
import { masterReducer } from "./reducers/masterReducer";

// const persistedState = loadState();
const store = createStore(masterReducer);
export default store;
