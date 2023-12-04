import { useFormik } from "formik";
import Form from "../common/Form";
import Input from "../common/Input";
import { authService } from "@/services/auth.services";
import { Box, Button, Typography } from "@mui/material";
import { AppContent } from "@/utils/contents";
import * as yup from "yup";
import { Link } from "react-router-dom";
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
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: authService.loginInitialValues(),
      validationSchema: validation,
      async onSubmit(values, { setSubmitting }) {
        console.log("values", values);
        setSubmitting(false);
      },
    });
  return (
    <Form onSubmit={handleSubmit}>
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
            Forgot password
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