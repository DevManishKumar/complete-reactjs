import { Highlighter } from "rc-highlight";
import { useState, useEffect } from "react";
import { useEffectCode } from "../../CodeData";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  const useEffectCod = useEffectCode;

  useEffect(() => {
    setCalc(() => count * 2);
  }, [count]);
  console.log(calc);

  return (
    <>
      <div className="contained">
        <h1 className="text-head">useEffect</h1>
        <p className="text-body-start">
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers. useEffect accepts two arguments. The
          second argument is optional.{" "}
          <code>useEffect(Function, Dependency)</code>
        </p>

        <div className="syntax-highlighter">
          <Highlighter>{useEffectCod}</Highlighter>
        </div>

        <p className="text-body-start">
          useEffect runs on every render. That means that when the count
          changes, a render happens, which then triggers another effect. This is
          not what we want. There are several ways to control when side effects
          run. We should always include the second parameter which accepts an
          array. We can optionally pass dependencies to useEffect in this array.
        </p>

        <div className="contained-center">
          <h1 className="text-head">useEffect Example : - </h1>
          <p className="text-count">Count: {count}</p>
          <button className="btn" onClick={() => setCount(count + 1)}>
            ADD
          </button>
          <p className="text-count">Double: {calc}</p>
        </div>
      </div>
    </>
  );
}

export default UseEffect;
