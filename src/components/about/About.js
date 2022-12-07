import React from "react";
import { Container, Grid } from "@mui/material";
import "./about.scss";
import Information from "./Information";
import Education from "./Education";

const About = () => {
  return (
    <section id="about" className="about">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="about-title">
          About <span>me</span>
        </h1>
        <p className="about-objectives">
          "My strength is handling ui/ux, so becoming senior front-end is my
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
            <Information />
          </Grid>
          <Grid item md={8} sm={12}>
            <div className="about-edu">
              <h2 className="about-edu-title">Education</h2>
              <Education
                name="VTC Academy"
                time="Oct 2020 - Present"
                intro="VTC Academy is an IT training unit that already exists in Hanoi and Ho Chi Minh City since 2010. After more than 10 years of operation, the academy is the birthplace of thousands of programming engineers, 3D graphic designers and AI engineers."
                major1="Major: Basis of programming"
                major2="Major: Web application development"
                major3="Major: Software programming (Full-Stack)"
              />
              <Education
                name="Evondev"
                time="Jun 2022 - Oct 2022"
                intro="Channel to teach front-end programming skills on online platform"
                major1="Basic HTML & CSS course"
                major2="Javascript basic to advanced course"
              />
              <Education
                name="F8"
                time="Oct 2022 - Dec 2022"
                intro="A popular and effective platform for teaching programming skills, always creating quality videos for learners"
                major1="Building website with ReactJS"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
