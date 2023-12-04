import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider, CssBaseline } from "@mui/material";
import themes from "@/theme";

type ThemeProps = {
  theme: "light" | "dark";
  changeTheme: () => void;
};

type AppTheme = "light" | "dark";
const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  changeTheme: () => {},
});

const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<AppTheme>("light");

  const changeTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    const theme = localStorage.getItem("theme") as AppTheme;
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes({ theme })}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Context can not be empty!");
  }
  return context;
};

export type { AppTheme, ThemeProps };
export default AppThemeProvider;
