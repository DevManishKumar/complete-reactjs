import { Highlighter } from "rc-highlight";
import React from "react";
import { routing } from "../../CodeData";

const Routing = () => {
  const routingCode = routing
  return (
    <div className="contained">
      <h1 className="text-head">Routing</h1>
      <p className="text-body-start">
        React itself does not come with built-in support for routing. React is
        primarily a library for building user interfaces, and it doesn't include
        a full-fledged routing solution out of the box. However, there are
        popular third-party libraries that can be used to handle routing in
        React applications. One such library is react-router, which provides a
        comprehensive routing solution for React applications. It allows you
        to define routes, manage navigation, and handle URL changes in a
        React-friendly way. To use react-router, you need to install it as a
        separate package and integrate it into your React application. Install
        react-router-dom using npm or yarn:
      </p>
      <p>
        <p className="text-body-start">1. npm install react-router-dom </p>
        <p className="text-body-start">
          2. Set up your routing configuration in your main application file:
        </p>
      </p>

      <div className="syntax-highlighter">
        <Highlighter>{routingCode}</Highlighter>
      </div>
    </div>
  );
};

export default Routing;
