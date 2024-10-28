import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <p className="error-message">Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
