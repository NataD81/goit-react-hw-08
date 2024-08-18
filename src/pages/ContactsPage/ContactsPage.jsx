import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1>Contacts</h1>
      <ContactForm />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={s.error}>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
