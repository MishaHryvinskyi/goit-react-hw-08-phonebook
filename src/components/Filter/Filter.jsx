import React from 'react';
import { FormFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/selector';
import { changeFilter } from 'redux/Contacts/filterSlice';
import { InputFilter } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
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
    </FormFilter>
  );
};

export default Filter;