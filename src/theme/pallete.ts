import { ITheme } from ".";

export default function themePallete(themeOption: ITheme) {
  const { options } = themeOption;
  return {
    mode: options.theme,
    ...CustomeTheme(themeOption),
  };
}

// custom theme
function CustomeTheme(theme: ITheme) {
  const { colors, options, scssColors } = theme;
  return options.theme === "light"
    ? {
        primary: { main: colors.blue[900] },
      }
    : {
        primary: colors.grey,
        divider: colors.grey[700],
        background: {
          default: scssColors.background,
          paper: scssColors.background,
        },
        text: {
          primary: "#fff",
          secondary: colors.grey[500],
        },
        grey: { 50: "#494949" },
      };
}
