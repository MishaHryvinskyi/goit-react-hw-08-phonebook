import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/Contacts/selector';
import { deleteContact } from 'redux/Contacts/operations';
import { 
  PiUserCircleBold, 
  PiPhoneBold, 
  PiTrashBold 
} from "react-icons/pi";
import { 
  ListItem, 
  List, 
  BtnDelite, 
  Container, 
  Number, 
  Name
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Container>
      <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
        <Name>
          <PiUserCircleBold style={{marginRight: '10px'}} size={30}/> {name}
        </Name>
           : 
        <Number>
          {number} <PiPhoneBold style={{marginLeft: '10px'}} size={30}/>
        </Number>
      
        <BtnDelite type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete <PiTrashBold style={{marginLeft: '10px'}} size={25}/>
        </BtnDelite>
      </ListItem>
      ))}
    </List>
    </Container>
  );
};

export default ContactList;