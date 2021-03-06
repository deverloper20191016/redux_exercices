import { createStore, applyMiddleware, compose } from "redux";
import appReducres from "./reducers/index";
import thunk from "redux-thunk";

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const appStore = createStore(appReducres, compose(...enhancers));
export default appStore;
