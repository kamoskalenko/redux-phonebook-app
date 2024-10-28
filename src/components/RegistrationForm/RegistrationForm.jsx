// RegistrationForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", email: "", password: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Мінімум 3 символи").required("Required"),
    email: Yup.string().email("Невірний формат email").required("Required"),
    password: Yup.string().min(6, "Мінімум 6 символів").required("Required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
    console.log(values);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <label htmlFor="name" className={s.label}>
              Name
            </label>
            <Field name="name" type="text" className={s.input} id="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />
          </div>

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
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
