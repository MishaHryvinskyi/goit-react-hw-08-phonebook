import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import { getVisibleContacts } from 'redux/Contacts/selector';
import { addContact } from 'redux/Contacts/operations';
import { FormatListForm, InputFilter, Container, SpanFormInput, FormBtn, Label } from './FormatList.styled';
import { LuUserPlus, LuPhone,  LuUser } from "react-icons/lu";

const FormList = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      toast.error(`${name}: is already in contacts`, {
        position: 'top-center',
      });
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <FormatListForm onSubmit={handleSubmit}>
      <Container>
        <Label>
          <SpanFormInput>Name <LuUser style={{ marginLeft: '10px', }} size={'30'} /></SpanFormInput>
          <InputFilter
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>
        <label>
          <SpanFormInput>Number <LuPhone style={{ marginLeft: '10px', }} size={'30'} /></SpanFormInput>
          <InputFilter
            style={{ marginBottom: '0px' }}
            type="tel"
            placeholder="Number"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>
      </Container>
      <FormBtn type="submit">
        Add to contacts <LuUserPlus size={'20px'} />
      </FormBtn>
    </FormatListForm>
  );
};

export default FormList;