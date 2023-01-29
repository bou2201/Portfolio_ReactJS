import React, { useEffect, useState } from "react";
import {
  Header,
  Navbar,
  Intro,
  About,
  Project,
  Skill,
  Contact,
  Loading,
} from "./components";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading && (
        <Loading loading={loading}/>
      )}
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
