import React from 'react';
import { InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/selector';
import { changeFilter } from 'redux/Contacts/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form>
      <label>
        <InputFilter
          type="name"
          value={value}
          onChange={handleChange}
          placeholder="Please enter a name to search"
        />
      </label>
    </form>
  );
};

export default Filter;