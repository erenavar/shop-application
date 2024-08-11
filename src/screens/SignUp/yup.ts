import * as Yup from "yup";

export const validation = Yup.object().shape({
    email: Yup.string()
      .email("Please,control your email adress")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });