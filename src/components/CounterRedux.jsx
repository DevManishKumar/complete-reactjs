import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/index2";

const CounterRedux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const Decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const ADDBY = () => {
    dispatch({ type: "ADDBY", payload: 10 });
  };

  const inc = () => {
    dispatch(actions.inc());
  };

  const dec = () => {
    dispatch(actions.dec());
  };

  const addBy = () => {
    dispatch(actions.addBy(20));
  };

  return (
    <div className="contained">
      <h1 className="text-head">Basic Terms</h1>
      <ol className="text-body-start">
        <li>REDUX : - A complex State Management Tool, with a single store as CDS.</li>
        <li>REDUCERS : - Manages the state and Returns the newly updated state.</li>
        <li>ACTIONS : - Actions have 2 properties type: which is a unique identifier and payload which has data.</li>
        <li>DISPATCH : - Dispatch used to send actions to update data.</li>
      </ol>
      <div className="contained-center">
        <h1 className="text-head">React-Redux Example : - Counter App</h1>
        {/* <button onClick={Decrement}>Decrement</button>
        <span>{counter}</span>
        <button onClick={Increment}>Increment</button>
        <button onClick={ADDBY}>ADD BY 10</button> */}
      </div>

      <div className="contained-center">
        <h1 className="text-head">React Redux ToolKit Example : - Counter App</h1>
        <button className="btn" onClick={dec}>Dec</button>
        <span className="text-count">{counter}</span>
        <button className="btn" onClick={inc}>Inc</button>-- 
        <button className="btn" onClick={addBy}>Add by 20</button>
      </div>
    </div>
  );
};

export default CounterRedux;
