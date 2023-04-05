import { createStore } from "redux";
import CounterReducer from "./Reducer";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(CounterReducer, devtools); //bech t5adem devtools
export default store;
