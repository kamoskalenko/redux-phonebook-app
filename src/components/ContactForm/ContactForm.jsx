import { Formik, Field, Form, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(15, "Must be 15 characters or less")
    .matches(
      /^(\+?\d{1,4}?[\s-]?)?(\(?\d{1,4}?\)?[\s-]?)?[\d\s-]{5,15}$/,
      "Phone number is not valid"
    )
    .required("Required"),
});

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={s.fieldWrapper}>
            <label htmlFor="name" className={s.label}>
              Name
            </label>
            <Field name="name" type="text" className={s.inputField} id="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />
          </div>

          <div className={s.fieldWrapper}>
            <label htmlFor="number" className={s.label}>
              Phone
            </label>
            <Field
              name="number"
              type="tel"
              className={s.inputField}
              id="number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={s.errorMessage}
            />
          </div>

          <button type="submit" className={s.btnSubmit}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
