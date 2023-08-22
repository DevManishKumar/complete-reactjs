import React, { useState } from "react";
import "./styles.css";
import { Highlighter } from "rc-highlight";
import { stateCode } from "../../CodeData";

const UseState = () => {
  const [count, setCount] = useState(0);

  const statecode = stateCode;
  return (
    <div className="contained">
      <h1 className="text-head">useState</h1>
      <p className="text-body-start">
        The React useState Hook allows us to track state in a function
        component. State generally refers to data or properties that need to be
        tracking in an application.
      </p>

      <div className="syntax-highlighter">
        <Highlighter>{statecode}</Highlighter>
      </div>


<div className="contained-center">
<h2 className="text-head">useState Counter Example : -</h2>

<button className="btn" onClick={() => setCount(count - 1)}>
  Decrement
</button>
<span className="text-count">{count}</span>
<button className="btn" onClick={() => setCount(count + 1)}>
  Increment
</button>
</div>
    </div>
  );
};

export default UseState;
