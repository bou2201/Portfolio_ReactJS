import React from "react";
import { Container, Grid } from "@mui/material";
import Avatar from "../../assets/avatar-about.jpg";
import "./about.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="about-title">
          About <span>me</span>
        </h1>
        <p className="about-objectives">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          accusantium eius recusandae facere esse dolore, tempore fugiat
          corrupti quae quis quidem reprehenderit animi, nobis harum quas,
          doloribus saepe dolorum possimus.
        </p>
        <Grid
          container
          spacing={{lg: 12, md: 6}}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Grid item lg={4} md={5} sm={8}>
            <div className="about-info">
              <div className="about-info-avatar">
                <img src={Avatar} alt="avatar" />
              </div>
              <div className="about-info-inner">
                <p>Gender:</p>
                <span>Male</span>
              </div>
              <div className="about-info-inner">
                <p>Date of birth:</p>
                <span>January 22, 2002</span>
              </div>
              <div className="about-info-inner">
                <p>Phone:</p>
                <span>+84 328482434</span>
              </div>
              <div className="about-info-inner">
                <p>Email:</p>
                <span>lamchuc123456@gmail.com</span>
              </div>
              <div className="about-info-inner">
                <p>Github:</p>
                <span>
                  <a
                    href="https://github.com/bou2201"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/bou2201
                  </a>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item lg={8} md={7} sm={12}>
            awd
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
