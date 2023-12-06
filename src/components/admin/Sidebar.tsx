import { memo } from "react";
import { AdminSidebarProps, Drawer } from "./style";
import Logo from "../layout/Logo";
import { Box, List, ListItem, Menu, MenuList } from "@mui/material";
import { AdminMenu } from "./menu";

/**
 * Admin sidebar component
 */
const AdminSidebar = memo(function AdminSidebar({
  drawerWidth = 250,
  open,
  variant = "permanent",
  ...rest
}: AdminSidebarProps) {
  return (
    <Drawer variant={variant} anchor="left" open={open} {...rest}>
      <Logo sx={{ display: "block", p: 2 }} to="/admin" />

      <Box>
        <List>
          {AdminMenu.map((menu) => (
            <ListItem>{menu.label}</ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
});

export default AdminSidebar;
