import { Box, BoxProps, Typography } from "@mui/material";
import { memo } from "react";
import { Link, LinkProps } from "react-router-dom";

type AuthTitleProps = BoxProps & {
  title?: string;
  subtitle?: string;
  linkProp?: LinkProps;
  linkLabel?: string;
};
const AuthTitle = memo(function AuthTitle({
  title = "Login",
  subtitle = "New user? ",
  linkLabel = "Create an account",
  linkProp = {
    to: "register",
  },
}: AuthTitleProps) {
  return (
    <Box>
      <Typography variant="h4" mb={3}>
        {title}
      </Typography>
      <Typography variant="body2" mb={4}>
        {subtitle}
        <Link {...linkProp}>{linkLabel}</Link>
      </Typography>
    </Box>
  );
});

export default AuthTitle;
