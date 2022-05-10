import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { PersonSearch } from '@mui/icons-material';
import { nanoid } from 'nanoid';

import * as contactsActions from 'redux/contacts/contacts-actions';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <TextField
      id={nanoid()}
      type="text"
      name="filter"
      onChange={e => dispatch(contactsActions.changeFiltre(e.target.value))}
      label="Find contacts by name"
      variant="standard"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonSearch />
          </InputAdornment>
        ),
      }}
    />
  );
}
