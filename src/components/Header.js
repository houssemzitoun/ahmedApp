import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
function Header() {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h2">Contact Manager</Typography>
      </Container>
    </div>
  );
}

export default Header;
