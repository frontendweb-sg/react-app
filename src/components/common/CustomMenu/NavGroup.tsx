import NavCollapse from "../NavCollapse";
import { memo } from "react";
import { useTheme } from "@/theme";
import { IMenu } from "@/utils/menus";
import { List, Typography } from "@mui/material";
import NavItem from "./NavItem";
import SubHeader from "./SubHeader";

/**
 * Nav group component
 */
const NavGroup = memo(function NavGroup({ item }: { item: IMenu }) {
  const { palette } = useTheme();

  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} menu={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List sx={{ mb: 2 }} subheader={item.title && <SubHeader menu={item} />}>
        {items}
      </List>
      {/* group divider */}
      {/* <Divider sx={{ mt: 0.25, mb: 1.25 }} /> */}
    </>
  );
});
export default NavGroup;
