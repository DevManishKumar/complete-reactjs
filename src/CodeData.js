export const basicReact = `
import React from 'react';
import ReactDOM from 'react-dom/client';

/** A pure component that displays a message */
const Greeting = () => {
  return (
    <div className="hello-world">
      <h1>Hello, world!</h1>
    </div>
  );
};

/** The main app component */
const App = () => {
  return <Greeting />;
};

/** React is rendered to a root element in the HTML page */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`;

export const functionComp = `// Function syntax
function Greeter() {
  return <div>Hello World</div>;
}

// Arrow function expression
const Greeter = () => <div>Hello World</div>;`;

export const clasComp = `class ParentComponent extends React.Component {
    state = { color: 'green' };
    render() {
      return (
        <ChildComponent color={this.state.color} />
      );
    }
  }`;

export const stateCode = `
import React, { useState } from "react";


const UseState = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div className="contained">

        <h2 className="text-head">useState Counter Example : - </h2>
  
        <button className="btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <span className="text-count">{count}</span>

        <button className="btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>

      </div>
    );
  };
  
  export default UseState;
  `;

export const propsCode = `function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  `;

export const routing = `import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;`;

export const eventHandling = `function Form() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Clicked');
    }
  
    return (
    <form onSubmit={handleClick}>
      <button type="submit">Submit</button>
    </form>
    );
  }
  `;

export const useEffectCode = `
import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);


  useEffect(() => {
    setCalc(() => count * 2);
  }, [count]);
  console.log(calc);

  return (
    <>
      <div className="contained">

        <h1 className="text-head">useEffect Example : - </h1>

        <p className="text-count">Count: {count}</p>

        <button className="btn" onClick={() => setCount(1)}>
          ADD
        </button>

        <p className="text-count">Double: {calc}</p>

      </div>
    </>
  );
}

export default UseEffect;
`;

export const contextOne = `import { createContext } from 'react';

export const MyContext = createContext("");`;

export const contextTwo = `// Create a parent component that wraps child components with a Provider

import { useState, React } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ name, setName }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
`;

export const contextThird = `import { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { name, setName } = useContext(MyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Raj')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;`;
