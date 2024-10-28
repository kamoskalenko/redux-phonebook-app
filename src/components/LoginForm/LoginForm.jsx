import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <label htmlFor="email" className={s.label}>
              Email
            </label>
            <Field name="email" type="email" className={s.input} id="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={s.errorMessage}
            />
          </div>

          <div className={s.fieldWrapper}>
            <label htmlFor="password" className={s.label}>
              Password
            </label>
            <Field
              name="password"
              type="password"
              className={s.input}
              id="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s.errorMessage}
            />
          </div>

          <button type="submit" className={s.button}>
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
