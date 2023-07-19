import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getFilter, getVisibleContacts } from 'redux/Contacts/selector';
import { changeFilter } from 'redux/Contacts/filterSlice';
import { PiSmileySadBold } from "react-icons/pi";
import { 
  FormFilter, 
  Message, 
  InputFilter 
} from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FormFilter>
      <InputFilter
        type="name"
        value={value}
        onChange={handleChange}
        placeholder="Search"
      />
      {visibleContacts.length === 0 && 
      <Message>
        No contacts found.
        <PiSmileySadBold style={{ marginLeft: '20px'}} size={40}/>
      </Message>}
    </FormFilter>
  );
};

export default Filter;