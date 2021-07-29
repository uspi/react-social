import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError && styles.error)}>
      <div><textarea {...input} {...props} /></div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError && styles.error)}>
      <div><input {...input} {...props} /></div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const createField = (placeholder, name, validators, component, props = {}) => {
  return (
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props} />
  );
}