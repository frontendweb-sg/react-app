import { NavLink } from "react-router-dom";
import Logo from "../layout/Logo";
import { Box, Container, IconButton, Link, Tab, Toolbar } from "@mui/material";
import { AppBar } from "./style";
import { NotificationsIcon, ShoppingBasketIcon } from "../icons";
import UserControl from "../widgets/UserControl";

/**
 *
 */
const UserHeader = () => {
  return (
    <AppBar elevation={0}>
      <Container>
        <Toolbar>
          <Logo to="/user" />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingBasketIcon />
            </IconButton>
            <UserControl />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserHeader;
