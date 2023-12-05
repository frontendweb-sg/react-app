import { Outlet } from "react-router-dom";
import Cover from "@/components/common/Cover";

/**
 * Auth page
 * @returns
 */
const Auth = () => {
  return (
    <Cover sx={{ display: "flex" }}>
      <Outlet />
    </Cover>
  );
};

export default Auth;
