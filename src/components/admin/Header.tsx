import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Box } from "@mui/material";
import { memo } from "react";
import { AppBar, AppBarProps } from "./style";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import UserControl from "../widgets/UserControl";
import GlobalSearch from "../common/GlobalSearch";
/**
 * Admin header component
 * @param param0
 * @returns
 */
type AdminHeaderProps = AppBarProps & {
  open?: boolean;
  onOpen?: () => void;
};
const AdminHeader = memo(function memo({
  open,
  onOpen,
  ...rest
}: AdminHeaderProps) {
  return (
    <AppBar open={open} {...rest}>
      <Toolbar>
        <IconButton onClick={onOpen}>
          <MenuIcon />
        </IconButton>
        <GlobalSearch />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <UserControl />
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default AdminHeader;
