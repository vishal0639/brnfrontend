import { createStore ,combineReducers} from "redux";
import { loginReducer } from "./reducers";

let reducer = combineReducers({ loginReducer })
export const store = createStore(reducer);
