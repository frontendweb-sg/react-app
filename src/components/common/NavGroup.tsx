import { memo } from "react";
import { useTheme } from "@/theme";
import { IMenu } from "@/utils/menus";

const NavGroup = memo(function NavGroup({ items }: { items: IMenu[] }) {
  const theme = useTheme();

  const menus = items?.map((menu: IMenu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return <div></div>;
});
export default NavGroup;
