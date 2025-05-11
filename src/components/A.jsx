import React from "react";
import { increment, decrement, incrementByAmount } from "../counterSlice";
import { useDispatch } from "react-redux";

function A() {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Comp A: controls</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
}

export default A;