import { IMenu } from "@/utils/menus";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/theme";

type NavItemProps = {
  menu: IMenu;
  level?: number;
};
const NavItem = ({ menu }: NavItemProps) => {
  const { palette } = useTheme();
  const Icon = menu?.icon!;
  return (
    <Link
      component={NavLink}
      mb={2}
      sx={{
        textDecoration: "none",
        overflow: "hidden",
        color: palette.grey[600],
        "&:hover": {
          color: palette.grey[900],
        },
        "&.active": {
          "& .MuiButtonBase-root": {
            backgroundColor: palette.grey[200],
            color: palette.grey[900],
          },
        },
      }}
      to={menu.href!}
    >
      <ListItemButton sx={{ borderRadius: 2 }}>
        {menu?.icon && (
          <ListItemIcon sx={{ mr: 0, minWidth: 40 }}>
            <Icon fontSize="small" />
          </ListItemIcon>
        )}
        <ListItemText>{menu.title}</ListItemText>
      </ListItemButton>
    </Link>
  );
};

export default NavItem;
