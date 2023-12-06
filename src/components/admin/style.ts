import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { DrawerProps } from "@mui/material/Drawer";
import { config } from "@/config";
export type AdminSidebarProps = DrawerProps & {
  drawerWidth?: number;
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: config.drawerFullWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop != "open",
})(({ theme, open }) => ({
  boxSizing: "border-box",
  width: config.drawerFullWidth,
  overflowY: "hidden",
  backgroundColor: "orange",
  borderRight: `1px dashed ${
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[200]
  }`,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      borderRight: "inherit",
      ...openedMixin(theme),
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": { borderRight: "inherit", ...closedMixin(theme) },
  }),
}));

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.common.white,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${theme.spacing(8)} - 1px)`,
    },
  }),
  ...(open && {
    marginLeft: config.drawerFullWidth,
    width: `calc(100% - ${config.drawerFullWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export type MainContainerProps = {
  open?: boolean;
};
export const MainContainer = styled("main")<MainContainerProps>(
  ({ theme, open }) => ({
    marginTop: 64,
    padding: 35,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(!open && {
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(8),
      },
    }),
    ...(open && {
      marginLeft: config.drawerFullWidth,
      width: `calc(100% - ${config.drawerFullWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);
