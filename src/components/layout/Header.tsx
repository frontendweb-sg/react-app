import { memo } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import { Tab } from "@mui/material";
import { NavLink } from "react-router-dom";

/**
 * Header component
 * @returns
 */
const Header = memo(function Header() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Logo to="/" />
          <Box>
            <Tab
              label="Configuration"
              id="configNavLink"
              to="availweb/configuration"
              component={NavLink}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Header;
