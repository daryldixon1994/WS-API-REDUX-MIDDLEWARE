import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "../redux/actions";
const Counter = () => {
    const { counter } = useSelector((state) => state.counterReducer);

    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch(increaseCounter());
    };
    const handleDecrease = () => {};
    return (
        <div className="counter-container">
            <button onClick={() => handleIncrease()}>+</button>
            <h1>{counter}</h1>
            <button onClick={() => handleDecrease()}>-</button>
        </div>
    );
};

export default Counter;
