import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, getUsers } from "../redux/actions";
const Counter = () => {
    const { counter } = useSelector((state) => state.counterReducer);
    const { users } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    // const handleIncrease = () => {
    //     dispatch(increaseCounter());
    // };
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    // const handleGetUsers = () => {
    //     dispatch(getUsers());
    // };
    return (
        <div>
            {/* <button>+</button> */}
            {users.map((user) => {
                return <h1>{user.name}</h1>;
            })}
            {/* <h1>{counter}</h1> */}
            {/* <button>-</button> */}
        </div>
    );
};

export default Counter;
