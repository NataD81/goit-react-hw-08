import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";

const ContactsPage = () => (
  <div className={s.container}>
    <h1>Contacts</h1>
    <ContactForm />
    <ContactList />
  </div>
);

export default ContactsPage;
