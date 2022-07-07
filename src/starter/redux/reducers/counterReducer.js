const initialState = {
    counter: 0,
    users: [],
};

const counterReducer = (state = initialState, action) => {
    let { type, payload } = action;
    console.log(payload);
    switch (type) {
        case "INC_COUNTER":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "GET_USERS":
            return {
                ...state,
                users: payload,
            };
        default:
            return state;
    }
};

export default counterReducer;
