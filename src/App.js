import React from "react";
import "./App.css";
import Header from "./components/Header";
import Textbox from "./components/Textbox";
import Darkmode from "./components/Darkmode";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [styl, setStyl] = useState({
    width: "20rem",
    background: "white",
    color: "black",
    border: "none",
  });
  function darkmode() {
    if (styl.background === "white") {
      setStyl({
        width: "20rem",
        background: "#000000e0",
        color: "white",
        border: "2px solid #874306",
      });
      document.body.style.background = "#000000db";
      document.body.style.color = "white";
      setText("Disable dark Mode");
      setMode("dark");
    } else {
      setStyl({
        width: "20rem",
        background: "white",
        color: "black",
        border: "none",
      });
      setText("Enable Dark Mode");
      document.body.style.color = "black";
      document.body.style.background = "white";
      setMode("light");
    }
  }
  return (
    <div>
      <Router>
        <Header mode={mode} text2={text} darkmodebtn={darkmode} />
        <Switch>
          <Route path="/AboutUs">
            <Darkmode stylcard={styl} />
            
          </Route>
          <Route path="/">
            <Textbox />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
