import LoginForm from "@/components/auth/LoginForm";
import Box from "@mui/material/Box";
import { useTheme } from "@/theme";
import { Grid, Typography } from "@mui/material";
import Image from "@/components/common/Image";
import ImageSrc from "@/assets/auth_dashboard.png";
import AuthFooter from "@/components/auth/Footer";

/**
 * Login page
 * @returns
 */
const Login = () => {
  const { palette } = useTheme();

  return (
    <Grid component="main" container>
      <Grid
        item
        md={7}
        lg={8}
        xl={9}
        sx={{
          position: "relative",
          backgroundColor: palette.grey[50],
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" mb={4}>
          Welcome to React app
        </Typography>
        <Image
          src={ImageSrc}
          alt=""
          boxProps={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <AuthFooter />
      </Grid>
      <Grid
        item
        md={5}
        lg={4}
        xl={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            maxWidth: { xs: 350 },
            margin: { xs: 2.5, md: 3 },
            "& > *": {
              flexGrow: 1,
              flexBasis: "50%",
            },
          }}
        >
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
