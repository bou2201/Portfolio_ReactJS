import React from "react";
import { Container, Grid } from "@mui/material";
import Infor from "./about_infor/Infor";
import Edu from "./about_education/Edu";
import "./about.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="section-title">
          About <span>me</span>
        </h1>
        <p className="about-objectives">
          "My strength is handling UI/UX, so becoming senior front-end is my
          goal. Besides, being able to participate in rubbing and learning from
          everyone's experience will help me go further ..."
        </p>
        <Grid
          container
          spacing={{ xl: 12, xs: 10 }}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Grid item md={4} sm={8}>
            <Infor />
          </Grid>
          <Grid item md={8}>
            <Edu />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
