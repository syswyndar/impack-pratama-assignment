import productReducer from "./productReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  products: productReducer,
});

export default reducer;
