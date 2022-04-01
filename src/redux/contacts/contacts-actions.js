import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction('contact/delete');
const changeFiltre = createAction('contact/changeFiltre');

export default { addContact, deleteContact, changeFiltre };
