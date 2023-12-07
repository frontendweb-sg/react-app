import { AppBar, Container, Typography } from "@mui/material";
import { memo } from "react";

/**
 * Auth footer
 */

const AuthFooter = memo(function AuthFooter() {
  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ top: "auto", bottom: 0, textAlign: "center", pb: 5 }}
    >
      <Container>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()}, All rights reserved, powered by{" "}
          <a href="https://frontendweb.ing" target="_self">
            frontendweb.in
          </a>
        </Typography>
      </Container>
    </AppBar>
  );
});

export default AuthFooter;
