import {
  createStyles,
  useTheme,
  createTheme,
  ThemeOptions,
  alpha,
} from "@mui/material/styles";
import themeTypography from "./typography";
import { colors } from "@mui/material";

type ThemeProps = {
  theme: "light" | "dark";
};
const theme = (options: ThemeProps) => {
  const { theme } = options;
  const color = colors;
  const themeOption = {
    colors: color,
    // heading: color.grey,
    // paper: color.paper,
    // backgroundDefault: color.paper,
    // background: color.primaryLight,
    // darkTextPrimary: color.grey700,
    // darkTextSecondary: color.grey500,
    // textDark: color.grey900,
    // menuSelected: color.secondaryDark,
    // menuSelectedBack: color.secondaryLight,
    // divider: color.grey200,
    options,
  };

  const themeOptions: ThemeOptions = {
    palette: {
      mode: theme,
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  return themes;
};

export { useTheme, createStyles, alpha };
export default theme;
