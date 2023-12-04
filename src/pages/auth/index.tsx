import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(() => ({
  minHeight: "100vh",
}));

/**
 * Auth page
 * @returns
 */
const Auth = () => {
  return (
    <Wrapper sx={{ display: "flex" }}>
      <Outlet />
    </Wrapper>
  );
};

export default Auth;
