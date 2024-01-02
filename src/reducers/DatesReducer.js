import { SUBMIT_DATES } from "../actions/types";

const INITIAL_STATE = {
    dates: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUBMIT_DATES:
            let f = new Date(
                Date.parse(action.payload.midPointDate) +
                    (Date.parse(action.payload.midPointDate) -
                        Date.parse(action.payload.startDate))
            );
            let fmonth =
                (f.getMonth() + 1 < 10 ? "0" : "") + (f.getMonth() + 1);
            let fdate = (f.getDate() < 10 ? "0" : "") + f.getDate();
            let futureDate = fmonth + "/" + fdate + "/" + f.getFullYear();
            let dates = { ...action.payload, futureDate };

            return { ...state, dates };
        default:
            return state;
    }
};
