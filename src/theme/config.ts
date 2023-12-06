export type IConfig = {
  drawerWidth: {
    sm: number;
    lg: number;
  };
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    full: number;
  };
};
export const config: IConfig = {
  drawerWidth: {
    sm: 80,
    lg: 280,
  },
  borderRadius: {
    xs: 5,
    sm: 10,
    md: 15,
    full: 50,
  },
};
