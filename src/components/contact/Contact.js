import React from "react";
import { Container, styled, TextField } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import Socials from "./Socials";
import "./contact.scss";
import Background from "../../assets/background-contact.png";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#fff",
    fontSize: 15,
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "4px 0 10px",
  },
  "& .MuiInput-root:before": {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  "& .MuiInput-root:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#fff",
  },
});

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="section-title">
          Contact <span>me</span>
        </h1>
        <div className="contact-form">
          <div className="contact-form-bg">
            <img src={Background} alt="" />
          </div>
          <div className="contact-form-input">
            <h4 className="contact-title">
              Get in touch <DriveFileRenameOutlineIcon />
            </h4>
            <p className="contact-desc">
              Fill out the form below to know details
            </p>
            <form>
              <CssTextField
                id="standard-basic"
                label="Name"
                variant="standard"
                sx={{ color: "#fff" }}
                placeholder="Your name"
                fullWidth
              />
              <CssTextField
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{ color: "#fff" }}
                placeholder="Your email"
                fullWidth
              />
              <CssTextField
                id="standard-basic"
                label="Message"
                variant="standard"
                sx={{ color: "#fff" }}
                multiline
                rows={5}
                placeholder="Type your message here..."
                fullWidth
              />
              <button className="contact-btn" type="submit">
                Submit <ReplyIcon />
              </button>
            </form>
          </div>
        </div>
      </Container>
      <Socials />
    </section>
  );
};

export default Contact;
