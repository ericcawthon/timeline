import { SUBMIT_DATES, FETCH_DATES } from "../actions/types";

export const submitDates = formValues => {
    return {
        type: SUBMIT_DATES,
        payload: formValues
    };
};

export const fetchDates = () => {
    return {
        type: FETCH_DATES
    };
};
