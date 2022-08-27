import { combineReducers, createStore } from "redux";
import { QuanLySinhVienReducer } from "./reducers/QuanLySinhVienReducer";

const rootReducer = combineReducers({
  number: 1,
  QuanLySinhVienReducer: QuanLySinhVienReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
