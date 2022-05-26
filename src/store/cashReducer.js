const defaultState = {
    cash: 5,
    summ: 0,
};

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload };
        case "GET_CASH":
            return { ...state, cash: state.cash - action.payload };
        case "SUMM_CASH":
            return { ...state, summ: state.cash - action.payload };
        default:
            return state;
    }
};
