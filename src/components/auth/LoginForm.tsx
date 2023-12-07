import { useFormik } from "formik";
// import Form from "../common/Form";
import Input from "../common/Input";
import { authService } from "@/services/auth.services";
import { Box, Button, Typography } from "@mui/material";
import { AppContent } from "@/utils/contents";
import * as yup from "yup";
import { Form, Link, useActionData } from "react-router-dom";
import AuthTitle from "./AuthTitle";

const validation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required(),
});

/**
 * Auth
 * @returns
 */
const LoginForm = () => {
  const errorsData = useActionData();
  const { values, touched, errors, handleBlur, handleChange } = useFormik({
    initialValues: authService.loginInitialValues(),
    validationSchema: validation,
    async onSubmit(values, { setSubmitting }) {
      console.log("values", values);
      setSubmitting(false);
    },
  });

  console.log("errorsData", errorsData);
  return (
    <Form method="post">
      <AuthTitle />
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
        type="password"
        name="password"
        label="Password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        errors={errors}
        touched={touched}
        fullWidth
      />
      <Box display="flex" justifyContent="end" mt={2}>
        <Typography variant="body2" color="gray">
          <Link
            to="forgot-password"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {AppContent.forgotPassword}
          </Link>
        </Typography>
      </Box>
      <Button
        size="large"
        type="submit"
        variant="contained"
        sx={{ width: "100%", mt: 2 }}
      >
        {AppContent.login}
      </Button>
    </Form>
  );
};

export default LoginForm;
