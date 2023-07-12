import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainContainer, PhonbookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  return (
    <MainContainer>
      <PhonbookTitle>Phonebook</PhonbookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </MainContainer>
  );
}