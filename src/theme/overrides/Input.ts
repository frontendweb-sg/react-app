import { ITheme } from "..";

export default function inputTheme(theme: ITheme) {
  const disabledStyle = {};
  console.log(theme, "th");
  return {
    MuiInput: {},
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.config.borderRadius.sm,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[300],
          },
          "&:hover $notchedOutline": {
            borderColor: theme.palette.grey[400],
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          padding: "15.5px 14px",
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        fieldset: {},
        input: {
          color: theme.palette.grey[900],
          "&::placeholder": {
            color: theme.palette.grey[500],
            fontSize: "0.875rem",
          },
        },
      },
    },
  };
}
