import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { logger } from "./middleware";
// const logger = (store) => (next) => (action) => {
//     console.log("dispatching", action);
//     let result = next(action);
//     console.log("next state", store.getState());
//     return result;
// };

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
