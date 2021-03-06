import { combineReducers } from "redux";
import repositoryReducer from "./repositoryReducer";
import productReducer from "./productReducer";

const appReducres = combineReducers({
  respository: repositoryReducer,
  productabc: productReducer,
});


export default appReducres;