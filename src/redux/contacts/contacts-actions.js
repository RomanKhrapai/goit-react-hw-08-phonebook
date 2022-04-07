import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contact/add',
  ({ id, name, number }) => ({
    payload: {
      id,
      name,
      number,
    },
  })
);
export const deleteContact = createAction('contact/delete');

export const changeFiltre = createAction('contact/changeFiltre');
