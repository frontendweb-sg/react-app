import NavGroup from "./NavGroup";
import { memo } from "react";
import { IMenu } from "@/utils/menus";
import { Typography } from "@mui/material";

type CustomMenuProps = {
  menus: IMenu[];
};

/**
 * Custom menu
 * @param param0
 * @returns
 */
const CustomMenu = memo(function CustomMenu({ menus }: CustomMenuProps) {
  const menuItems = menus.map((menu: IMenu) => {
    switch (menu.type) {
      case "group":
        return <NavGroup key={menu.id} item={menu} />;
      default:
        return <Typography key={menu.id}></Typography>;
    }
  });

  return menuItems;
});

export default CustomMenu;
