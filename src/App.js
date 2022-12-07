import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";

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
