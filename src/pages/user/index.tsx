import Cover from "@/components/common/Cover";
import UserFooter from "@/components/layout/Footer";
import UserHeader from "@/components/user/Header";
import UserSidebar from "@/components/user/Sidebar";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <Cover>
      <UserHeader />
      <Container component="main" sx={{ mt: 12 }}>
        <Grid container spacing={3}>
          <Grid item sm={4} lg={4} xl={3}>
            <UserSidebar />
          </Grid>
          <Grid item sm={8} lg={8} xl={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
      <UserFooter />
    </Cover>
  );
};

export default User;
