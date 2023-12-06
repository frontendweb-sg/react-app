import {
  createStyles,
  useTheme,
  createTheme,
  ThemeOptions,
  alpha,
} from "@mui/material/styles";
import themeTypography from "./typography";
import { Theme, colors } from "@mui/material";
import componentsOverride from "./overrides";
import themePallete from "./pallete";
import scssColors from "@/theme/scss/_variables.module.scss";

export type ThemeProps = {
  theme: "light" | "dark";
  dir?: "ltr" | "rtl";
};

export type ITheme = Theme & {
  colors: typeof colors;
  options: ThemeProps;
  scssColors: typeof scssColors;
};

const theme = (options: ThemeProps) => {
  const muiTheme = useTheme();

  const themeOption: ITheme = {
    ...muiTheme,
    direction: options.dir ?? "ltr",
    colors,
    options,
    scssColors,
  };

  const themeOptions: ThemeOptions = {
    palette: themePallete(themeOption),
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return themes;
};

export { useTheme, createStyles, alpha };
export default theme;
