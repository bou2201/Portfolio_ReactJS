import { Container } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="section-title">
          Contact <span>me</span>
        </h1>
      </Container>
    </section>
  );
};

export default Contact;
