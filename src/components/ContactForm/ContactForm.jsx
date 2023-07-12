import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { PhoneForm, PhoneLabel, Input, Btn } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = e => {
    e.preventDefault(); 
    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact)); 
    e.currentTarget.reset(); 
  };
  
  return (
    <PhoneForm onSubmit={handleSubmit}>
      <PhoneLabel htmlFor={nanoid()}>
        Name
        <Input
          type="text"
          name="name"
          required
          id={nanoid()}
        />
      </PhoneLabel>
      <PhoneLabel htmlFor={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          id={nanoid()}
          required
        />
      </PhoneLabel>
      <Btn type="submit">Add contact</Btn>
    </PhoneForm>
  );
};