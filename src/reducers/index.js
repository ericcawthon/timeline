import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import datesReducer from "./DatesReducer";

export default combineReducers({
    dateValues: datesReducer,
    form: formReducer
});
