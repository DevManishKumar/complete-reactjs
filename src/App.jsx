import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Profile from "./components/pages/Profile";
import Skills from "./components/pages/Skills";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Exercise from "./components/pages/Exercise";
import UserContext from "./context/UserContext";
import Home from "./components/pages/Home";
import Intro from "./components/exercise/Intro";
import Components from "./components/exercise/Components";
import PropsEx from "./components/exercise/PropsEx";
import ApiCall from "./components/exercise/ApiCall";
import UseContext from "./components/exercise/UseContext";
import UseState from "./components/exercise/State";
import Hooks from "./components/exercise/HooksEx";
import Routing from "./components/exercise/RoutingEx";
import EventHandling from "./components/exercise/EventHandling";
import CounterRedux from "./components/CounterRedux";

const App = () => {
  const [name, setName] = useState("Raj");
  console.log(name);
  return (
    <UserContext.Provider value={{ name }}>
      <Router>
        <Header />

        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/exercise/intro" element={<Intro />} />
            <Route path="/exercise/components" element={<Components />} />
            <Route path="/exercise/state" element={<UseState />} />
            <Route path="/exercise/props" element={<PropsEx />} />
            <Route
              path="/exercise/event-handling"
              element={<EventHandling />}
            />
            <Route path="/exercise/hooks" element={<Hooks />} />
            <Route path="/exercise/routing" element={<Routing />} />
            <Route path="/exercise/api" element={<ApiCall />} />
            <Route path="/exercise/context-api" element={<UseContext />} />
            <Route path="/exercise/redux" element={<CounterRedux />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        <Footer />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
