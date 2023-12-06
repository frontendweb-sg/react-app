import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
// import store from "./store/index.ts";
import App from "./App.tsx";
// import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import AppThemeProvider from "./components/context/theme.tsx";
import "./index.scss";

// client query instance
const clientQuery = new QueryClient();

// element
const el = document.getElementById("root") as HTMLElement;
const app = ReactDOM.createRoot(el);
app.render(
  <React.StrictMode>
    <AppThemeProvider>
      {/* client query provider */}
      <QueryClientProvider client={clientQuery}>
        {/* redux setup */}
        {/* <Provider store={store}> */}
        {/* MUI style */}
        <CssBaseline />
        {/* App component */}
        <App />
        {/* </Provider> */}
      </QueryClientProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
