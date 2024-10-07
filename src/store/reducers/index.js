import { combineReducers } from "redux";
import getPatientsReducer from "./getPatientReducer";

const rootReducer = combineReducers({
   data:getPatientsReducer,
});

export default rootReducer;
