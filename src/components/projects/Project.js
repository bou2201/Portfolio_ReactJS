import { Container } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <section id="project" className="project">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="about-title">
          <span>My</span> projects
        </h1>
      </Container>
    </section>
  );
};

export default Project;
