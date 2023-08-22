import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Highlighter } from "rc-highlight";
import { contextOne, contextThird, contextTwo } from "../../CodeData";

const UseContext = () => {
  const { name } = useContext(UserContext);

  const context1 = contextOne
  const context2 = contextTwo
  const context3  = contextThird
  return (
    <div className="contained">
      <h1 className="text-head">React Context </h1>
      <p className="text-body-start">
        React Context is a way to manage state globally. It can be used together
        with the useState Hook to share state between deeply nested components
        more easily than with useState alone.
      </p>
      <h1 className="text-head">The Problem</h1>
      <p className="text-body-start">
        State should be held by the highest parent component in the stack that
        requires access to the state. To illustrate, we have many nested
        components. The component at the top and bottom of the stack need access
        to the state. To do this without Context, we will need to pass the state
        as "props" through each nested component. This is called "prop
        drilling".
      </p>
      <h1 className="text-head">1. Create a Context Object</h1>
      <div className="syntax-highlighter">
        <Highlighter>{context1}</Highlighter>
      </div>
      <h1 className="text-head">2. Wrap Components with a Provider</h1>
      <div className="syntax-highlighter">
        <Highlighter>{context2}</Highlighter>
      </div>
      <h1 className="text-head">3. Consume the Context</h1>
      <div className="syntax-highlighter">
        <Highlighter>{context3}</Highlighter>
      </div>

      <div className="contained-center">
        {" "}
        <h1 className="text-head">useContext Example : -</h1>
        <p className="text-body-start">Name: {name}</p>
      </div>
    </div>
  );
};

export default UseContext;
