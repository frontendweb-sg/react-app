import Form from "../common/Form";
import Input from "../common/Input";
import { useFormik } from "formik";
import { authService } from "@/services/auth.services";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AppContent } from "@/utils/contents";
import { Link } from "react-router-dom";
import * as yup from "yup";
import AuthTitle from "./AuthTitle";

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
      <AuthTitle
        linkLabel="Sign in"
        linkProp={{ to: ".." }}
        subtitle={AppContent.registerSubtitle}
        title="Registration"
      />
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            name="password"
            label="Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors}
            touched={touched}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name="confirmPassword"
            label="Confirm password"
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors}
            touched={touched}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
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

      <Button type="submit" variant="contained" sx={{ width: "100%", mt: 2 }}>
        {AppContent.createAccount}
      </Button>
    </Form>
  );
};

export default RegisterForm;
