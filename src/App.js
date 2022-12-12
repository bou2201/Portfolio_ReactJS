import React from "react";
import {
  Header,
  Navbar,
  Intro,
  About,
  Project,
  Skill,
  Contact,
} from "./components";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  );
}

export default App;
