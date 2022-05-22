import { createStore } from "redux";
import { masterReducer } from "./reducers/masterReducer";
import { loadState, saveState } from "../helpers/local-storage-utils";

// const persistedState = loadState();
const store = createStore(masterReducer);
export default store;
