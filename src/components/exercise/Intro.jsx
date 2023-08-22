import React from "react";

import { Highlighter } from "rc-highlight";
import { basicReact } from "../../CodeData";

const Intro = () => {
  const basicCode = basicReact;
  return (
    <div className="contained">
      <h1 className="text-head">Introduction</h1>
      <p className="text-body-start">
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library for building user interfaces based on
        components. It is maintained by Meta (formerly Facebook) and a community
        of individual developers and companies. React can be used to develop
        single-page, mobile, or server-rendered applications with frameworks
        like Next.js. Because React is only concerned with the user interface
        and rendering components to the DOM, React applications often rely on
        libraries for routing and other client-side functionality.
      </p>

      <div className="syntax-highlighter">
      <Highlighter  copyToClipBoard={true}>{basicCode}</Highlighter>
      </div>
    </div>
  );
};

export default Intro;
