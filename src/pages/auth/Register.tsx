import RegisterForm from "@/components/auth/RegisterForm";
import Box from "@mui/material/Box";
import { useTheme } from "@/theme";
import { Grid, Typography } from "@mui/material";
import Image from "@/components/common/Image";
import ImageSrc from "@/assets/auth_dashboard.png";
import AuthFooter from "@/components/auth/Footer";
import { AppContent } from "@/utils/contents";

const Register = () => {
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
        <Typography fontFamily="sans-serif" variant="h1" mb={4}>
          {AppContent.welcomeText}
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
          <RegisterForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
