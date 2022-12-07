import React from "react";
import { Container, Box } from "@mui/material";
import Logo from "./Logo";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Container
        maxWidth="lg"
        sx={{ py: { lg: 4, xs: 3 }, px: { xl: 0, xs: 2 } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Logo />
        </Box>
      </Container>
    </header>
  );
};

export default Header;
