import Input from "@/components/common/Input";
import { Grid } from "@mui/material";
import { Form, useActionData } from "react-router-dom";

/**
 * User Profile
 * @returns
 */
const UserProfile = () => {
  const userData = useActionData();
  console.log(userData);
  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input name="firstName" />
        </Grid>
        <Grid item xs={6}>
          <Input name="lastName" />
        </Grid>
        <Grid item xs={6}>
          <Input name="email" />
        </Grid>
        <Grid item xs={6}>
          <Input name="email" />
        </Grid>
        <Grid item xs={6}>
          <Input name="email" />
        </Grid>
      </Grid>
    </Form>
  );
};

export default UserProfile;
