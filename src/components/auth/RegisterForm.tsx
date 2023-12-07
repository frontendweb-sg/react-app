import Input from "../common/Input";
import { useFormik } from "formik";
import { authService } from "@/services/auth.services";
import { Button, Grid } from "@mui/material";
import { AppContent } from "@/utils/contents";

import * as yup from "yup";
import AuthTitle from "./AuthTitle";
import { Form, useActionData, useNavigation } from "react-router-dom";

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
  const navigation = useNavigation();
  const errorsData = useActionData();
  const isSubmitting = navigation.state;

  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: authService.registerInitialValues(),
    validationSchema: validation,
    async onSubmit(values, { setSubmitting }) {
      console.log("values", values);
      setSubmitting(false);
    },
  });

  console.log("navigation", navigation);
  return (
    <Form method="post">
      <AuthTitle
        linkLabel="Sign in"
        linkProp={{ to: ".." }}
        subtitle={AppContent.registerSubtitle}
        title="Registration"
      />
      {JSON.stringify(errorsData)}
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
            type="password"
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
            type="password"
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
