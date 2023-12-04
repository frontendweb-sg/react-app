import Form from "../common/Form";
import Input from "../common/Input";
import { useFormik } from "formik";
import { authService } from "@/services/auth.services";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AppContent } from "@/utils/contents";
import { Link } from "react-router-dom";
import * as yup from "yup";

const validation = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required(),
  mobile: yup.string().required("Mobile is required"),
});

/**
 * Register form component
 * @returns
 */
const RegisterForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: authService.registerInitialValues(),
      validationSchema: validation,
      async onSubmit(values, { setSubmitting }) {
        console.log("values", values);
        setSubmitting(false);
      },
    });
  return (
    <Form onSubmit={handleSubmit}>
      <Typography>Login</Typography>
      <Typography>
        If you have an account, please click on <Link to="..">login</Link>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            name="firstName"
            label="First name"
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors}
            touched={touched}
            sx={{ mb: 2 }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name="lastName"
            label="Last name"
            value={values.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors}
            touched={touched}
            sx={{ mb: 2 }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Input
        name="email"
        label="Email id"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        errors={errors}
        touched={touched}
        sx={{ mb: 2 }}
        fullWidth
      />
      <Input
        name="password"
        label="Password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        errors={errors}
        touched={touched}
        fullWidth
      />
      <Input
        name="mobile"
        label="Mobile no"
        value={values.mobile}
        onBlur={handleBlur}
        onChange={handleChange}
        errors={errors}
        touched={touched}
        fullWidth
      />
      <Box alignItems="center" justifyContent="flex-end" display="flex" mt={2}>
        <Button type="button" variant="contained" sx={{ mr: 2 }}>
          {AppContent.reset}
        </Button>
        <Button type="submit" variant="contained">
          {AppContent.login}
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
