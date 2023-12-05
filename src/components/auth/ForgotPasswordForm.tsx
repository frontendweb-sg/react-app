import { useFormik } from "formik";
import Form from "../common/Form";
import Input from "../common/Input";
import { Button } from "@mui/material";
import { AppContent } from "@/utils/contents";
import AuthTitle from "./AuthTitle";

/**
 * Forgot password component form
 * @returns
 */
const ForgotPasssword = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit(values, { setSubmitting }) {
        console.log("values", values);
        setSubmitting(false);
      },
    });
  return (
    <Form onSubmit={handleSubmit}>
      <AuthTitle
        title={AppContent.forgotPassword}
        subtitle="Back to login?"
        linkLabel="Sign in"
        linkProp={{
          to: "/auth",
        }}
      />
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
      <Button
        size="large"
        type="submit"
        variant="contained"
        sx={{ width: "100%", mt: 2 }}
      >
        {AppContent.forgotPassword}
      </Button>
    </Form>
  );
};

export default ForgotPasssword;
