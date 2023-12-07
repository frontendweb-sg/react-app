import { memo } from "react";
import { AppBar, AppBarProps, Typography } from "@mui/material";
import Container from "@mui/material/Container";

/**
 * Footer component
 * @returns
 */
type FooterProps = AppBarProps & {};
const Footer = memo(function Footer(props: FooterProps) {
  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ top: "auto", bottom: 0, textAlign: "center", pb: 5, ...props.sx }}
      {...props}
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

export default Footer;
