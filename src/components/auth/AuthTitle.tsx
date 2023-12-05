import { Box, BoxProps, Typography } from "@mui/material";
import { memo } from "react";
import { Link as NavLink, LinkProps } from "react-router-dom";
import Link from "@mui/material/Link";
import { useTheme } from "@/theme";
import Logo from "../layout/Logo";
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
  console.log("hi");
  const { palette } = useTheme();
  return (
    <Box>
      <Logo to="/" />
      <Typography variant="h2" color={palette.primary.main} mb={3}>
        {title}
      </Typography>
      <Typography color="gray" variant="body2" mb={4}>
        {subtitle}
        <Link
          component={NavLink}
          sx={{
            color: palette.success.light,
            textDecoration: "none",
            ml: 0.5,
            "&:hover": {
              color: palette.success.dark,
            },
          }}
          {...linkProp}
        >
          {linkLabel}
        </Link>
      </Typography>
    </Box>
  );
});

export default AuthTitle;
