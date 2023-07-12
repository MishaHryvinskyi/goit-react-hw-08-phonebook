import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import {selectError, selectFilteredContacts, selectIsLoading } from 'redux/selector';
import { fetchContacts, deleteContact } from 'redux/operations';
import { List, ListItem, BtnDelite, Contact } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); 
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id)); 
  };

  return (
    <>
    {!filteredContacts?.length && !error && !isLoading && (
      <Contact>No contacts found</Contact>
    )}
    {error && <Contact>{error}</Contact>}
      <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <BtnDelite onClick={() => handleDeleteContact(id)}>
          Remove
          </BtnDelite>
        </ListItem>
      ))}
    </List>
    </>
  );
}