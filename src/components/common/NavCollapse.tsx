import { useState } from "react";
import { IMenu } from "@/utils/menus";
import {
  ListItemButton,
  ListItemIcon,
  Collapse,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "@/hooks/useToggle";
import NavGroup from "./CustomMenu/NavGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavItem from "./CustomMenu/NavItem";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
type NavCollapseProps = {
  menu: IMenu;
  level?: number;
};
const NavCollapse = memo(function NavCollapse({
  menu,
  level,
}: NavCollapseProps) {
  const { open, handleToggle } = useToggle();
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();
  const Icon = menu?.icon!;

  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} menu={item} />;
      case "item":
        return <NavItem key={item.id} menu={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return (
    <>
      <ListItemButton
        sx={{
          mb: 0.5,
          alignItems: "flex-start",
          backgroundColor: level! > 1 ? "transparent !important" : "inherit",
        }}
        selected={selected === menu!.id}
        onClick={handleToggle}
      >
        {menu.icon && (
          <ListItemIcon sx={{ my: "auto", minWidth: 40 }}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText>{menu.title}</ListItemText>

        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: "relative",
            "&:after": {
              content: "''",
              position: "absolute",
              left: "32px",
              top: 0,
              height: "100%",
              width: "1px",
              opacity: 1,
            },
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
});

export default NavCollapse;
