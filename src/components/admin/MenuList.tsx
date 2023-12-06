import { AdminMenu, IMenu } from "@/utils/menus";
import { Typography } from "@mui/material";

const AdminMenuList = () => {
  const navItems = AdminMenu.map((menu: IMenu) => {
    switch (menu.type) {
      case "group":
        return <NavGroup key={menu.id} item={menu} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
};
