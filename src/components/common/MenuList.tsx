import NavGroup from "./CustomMenu/NavGroup";
import { IMenu } from "@/utils/menus";
import { Typography } from "@mui/material";

type CustomMenuProps = {
  menus: IMenu[];
};
const CustomMenuList = ({ menus }: CustomMenuProps) => {
  const navItems = menus.map((menu: IMenu) => {
    switch (menu.type) {
      case "group":
        return <NavGroup key={menu.id} item={menu} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            There is no menu item
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default CustomMenuList;
