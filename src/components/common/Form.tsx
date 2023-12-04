import { memo } from "react";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {};
const Form = memo(function Form({ children, ...rest }: FormProps) {
  return (
    <form noValidate {...rest}>
      {children}
    </form>
  );
});

export default Form;
