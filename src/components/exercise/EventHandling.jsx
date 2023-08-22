import { Highlighter } from "rc-highlight";
import React from "react";
import { eventHandling } from "../../CodeData";

const EventHandling = () => {
  const EventHandling = eventHandling

  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked');
  }
  return (
    <div className="contained">
      <h1 className="text-head">Event Handling</h1>
      <p className="text-body-start">
        Events are the things that javascript can react to. Event handling in
        React is quite similar to DOM element event handling. The following are
        some specific events in React that you could encounter when interacting
        with websites built with React:
        <ol>
          <li>Clicking an element</li>
          <li>Submitting a form</li>
          <li>Scrolling page</li>
          <li>Hovering an element</li>
          <li>Loading a webpage</li>
          <li>Input field change</li>
          <li>User stroking a key</li>
          <li>Image loading...</li>
        </ol>
      </p>

      <div className="syntax-highlighter">
        <Highlighter>{EventHandling}</Highlighter>
      </div>

      <form onSubmit={handleClick}>
        <br />
        <button className="btn text-body" type="submit">Submit</button>
        <p className="text-body">After click submit button open console and see what happen in it.</p>
      </form>
    </div>
  );
};

export default EventHandling;
