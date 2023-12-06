import Logo from "../layout/Logo";
import { memo } from "react";
import { AdminSidebarProps, Drawer } from "./style";
import { Switch, useMediaQuery } from "@mui/material";
import { AdminMenu } from "@/utils/menus";
import SimpleBar from "simplebar-react";
import { useTheme } from "@/theme";
import { BrowserView } from "react-device-detect";
import "simplebar-react/dist/simplebar.min.css";
import CustomMenu from "../common/CustomMenu";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppTheme } from "../context/theme";
/**
 * Admin sidebar component
 */
const AdminSidebar = memo(function AdminSidebar({
  drawerWidth = 250,
  open,
  variant = "permanent",
  ...rest
}: AdminSidebarProps) {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const { changeTheme } = useAppTheme();
  return (
    <Drawer variant={variant} anchor="left" open={open} {...rest}>
      <Logo sx={{ display: "block", p: 2 }} to="/admin" />
      <BrowserView>
        <SimpleBar
          style={{
            height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {/* <CustomMenuList menus={AdminMenu} /> */}
          <CustomMenu menus={AdminMenu} />

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Theme"
            dir="rtl"
            onClick={changeTheme}
          />
        </SimpleBar>
      </BrowserView>
    </Drawer>
  );
});

export default AdminSidebar;
