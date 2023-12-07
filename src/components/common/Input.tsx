import classNames from "classnames";
import { TextField } from "@mui/material";
import { memo, forwardRef, useRef, useImperativeHandle } from "react";
import type { TextFieldProps } from "@mui/material";
import type { FormikErrors, FormikTouched } from "formik";
import { upperFirst } from "lodash";

export type InputProps = TextFieldProps & {
  label?: string;
  dataTestId?: string;
  errors?: FormikErrors<{ [field: string]: any }>;
  touched?: FormikTouched<{ [field: string]: any }>;
};
export type InputRef = {
  current?: any;
};

const Input = memo(
  forwardRef<InputRef, InputProps>(function Input(
    {
      name,
      value,
      placeholder,
      dataTestId = "input",
      errors,
      touched,
      ...rest
    },
    ref
  ) {
    const classes = classNames();
    const inpRef = useRef<HTMLInputElement>(null);
    const isError =
      errors?.[name as keyof typeof errors] &&
      touched?.[name as keyof typeof touched];

    const errorText =
      errors?.[name as keyof typeof errors] &&
      touched?.[name as keyof typeof touched]
        ? errors?.[name as keyof typeof errors]
        : null;

    useImperativeHandle(ref, () => ({
      current: inpRef.current!,
    }));

    return (
      <TextField
        fullWidth
        name={name}
        value={value}
        data-testid={dataTestId}
        className={classes}
        error={!!isError}
        helperText={errorText as any}
        placeholder={placeholder || upperFirst(name)}
        ref={inpRef}
        {...rest}
      />
    );
  })
);

export default Input;
