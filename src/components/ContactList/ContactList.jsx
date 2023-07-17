import React from 'react';
import { ListItem, List, BtnDelite } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/Contacts/selector';
import { deleteContact } from 'redux/Contacts/operations';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name + ' : ' + number}

          <BtnDelite type="button" onClick={() => dispatch(deleteContact(id))}>
            delete 
          </BtnDelite>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;