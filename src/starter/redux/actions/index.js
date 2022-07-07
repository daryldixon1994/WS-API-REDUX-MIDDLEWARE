export const increaseCounter = () => {
    return {
        type: "INC_COUNTER",
    };
};
export const getUsers = () => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "GET_USERS", payload: data }))
        .catch();
};
