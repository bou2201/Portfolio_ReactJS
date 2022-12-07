import React from "react";
import { Grid, Container } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Avatar from "../../assets/avatar-introduct.jpg";
import Hand from "../../assets/hand.png";
import "./intro.scss";

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <Grid
          container
          spacing={5}
          sx={{ alignItems: "center", flexWrap: "wrap" }}
        >
          <Grid item md={7} xs={12}>
            <div className="intro-content">
              <p style={{ display: "flex", alignItems: "center", gap: 20 }}>
                Hi There
                <img src={Hand} alt="hand" className="hand" />
              </p>
              <p>
                I'm <span>Nguyen Lam Chuc</span>
              </p>
              <div className="typing">
                <p className="typing-run">I'm Front-end Developer.</p>
              </div>
              <div className="resume">
                <a href="/" className="download">
                  Download CV <CloudDownloadIcon />
                </a>
                <a href="/" className="preview">
                  Preview
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div className="intro-avatar">
              <img src={Avatar} alt="avatar" />
            </div>
          </Grid>
        </Grid>
        <div className="scroll">
          <span className="scroll-text">Scroll down</span>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
