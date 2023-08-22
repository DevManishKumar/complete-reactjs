import React from "react";
import { Highlighter } from "rc-highlight";
import { clasComp, functionComp } from "../../CodeData";

const Components = () => {
  const funcComp = functionComp;
  const classComp = clasComp
  return (
    <div className="contained">
      <h1 className="text-head">Components</h1>
      <p className="text-body-start">
        React code is made of entities called components. These components are
        modular and reusable. React applications typically consist of many
        layers of components. The components are rendered to a root element in
        the DOM using the React DOM library. When rendering a component, values
        are passed between components through props (short for "properties").
        Values internal to a component are called its state.
      </p>
      <p className="text-body-start">
        The two primary ways of declaring components in React are through
        function components and class components.
      </p>

      <p className="text-body-start">
        Function components are declared with a function (using JavaScript
        function syntax or an arrow function expression) that accepts a single
        "props" argument and returns JSX. From React v16.8 onwards, function
        components can use state with the useState Hook.
      </p>
      <div className="syntax-highlighter">
        <Highlighter>{funcComp}</Highlighter>
      </div>

      <p className="text-body-start">
        Class components are declared using ES6 classes. They behave the same
        way that function components do, but instead of using Hooks to manage
        state and lifecycle events, they use the lifecycle methods on the
        React.Component base class.
      </p>
      <div className="syntax-highlighter">
        <Highlighter>{classComp}</Highlighter>
      </div>
    </div>
  );
};

export default Components;
