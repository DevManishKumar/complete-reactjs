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

            <h2>ReactJS installation and setup</h2>  

        <h6>For setting up React in our local system, the first step is to Install NodeJs and npm.</h6>

        
        <h5 className="syntax-highlighter">
        <Highlighter copyToClipBoard={true}>Install Nodejs</Highlighter>
      </h5>
        <p>Node.js provides a runtime environment to execute JavaScript code from outside a browser. NPM, the Node package manager is used for managing and sharing the packages for either React or Angular.</p>

        <p>NPM will be installed along with Nodejs. Node.js can be downloaded and installed from the official NodeJs website.</p>

       <a href="https://nodejs.org">https://nodejs.org</a> 

       <p>Once the Installation of Node is complete. Open Node.Js Command Prompt and we can check the version as well.
</p> 
        <h2>Install Create-React-App Tool</h2>
        <p>The next step is to install a tool called create-react-app using NPM. This tool is used to create react applications easily from our system. You can install this at the system level or temporarily at a folder level. We will install it globally by using the following command.</p>

        
        <h5 className="syntax-highlighter">
        <Highlighter copyToClipBoard={true}>npm install -g create-react-app</Highlighter>
      </h5>


      <h2>Creating a new react project</h2>
       <p>After create-react-app is installed, we can create our first react application. Let's say I want to create the project or application in D:\React_Programs. I will create this folder and let our command prompt point to it by using the change directory command.</p> 

       <p> Let's create a new Project now using the command.</p>

        
        <div className="syntax-highlighter">
        <Highlighter copyToClipBoard={true}>create-react-app test-project</Highlighter>
      </div>
       <p>Remember not to create the project with an upper case character In it.
</p> 
       <h4>Running the React Application</h4> 
        <p>Let's do CD to the Project we have created and run it locally on our system using npm start. Launch the browser and visit http://localhost:3000. We can then see our first React Application response in the browser.</p>

       
        <div className="syntax-highlighter">
        <Highlighter copyToClipBoard={true}>
           cd test-project
           npm start
        </Highlighter>
      </div>
       <p> We have created a New Project using React and executed the Project.</p>



      <div className="syntax-highlighter">
      <Highlighter  copyToClipBoard={true}>{basicCode}</Highlighter>
      </div>
    </div>
  );
};

export default Intro;
