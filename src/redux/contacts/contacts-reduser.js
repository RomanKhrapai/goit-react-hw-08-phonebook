import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';
import * as actions from './contacts-actions';

const items = createReducer([], {
  [addContact.pending]: () => {
    console.log('01');
  },
  [addContact.fulfilled]: () => {
    console.log('02');
  },
  [addContact.error]: () => {
    console.log('03');
  },
  [fetchContacts.pending]: () => {
    console.log('04');
  },

  [fetchContacts.fulfilled]: (_, action) => action.payload,

  // [addContact.fulfilled]: (state, action) => {
  //   console.log(action);
  //   //return  action;
  // },
  // [deleteContact.fulfilled]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFiltre]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [addContact.fulfilled]: () => {
    console.log(0);
    return true;
  },
  [deleteContact.pending]: () => {
    console.log(0);
    return true;
  },
  [fetchContacts.pending]: () => {
    console.log(1);
    return true;
  },
  [fetchContacts.fulfilled]: () => {
    console.log(2);
    return false;
  },
  [fetchContacts.error]: () => {
    console.log(3);
    return false;
  },
});

const error = createReducer(null, {
  [fetchContacts.error]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [deleteContact.error]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
  [addContact.error]: (_, action) => action.payload,
  [addContact.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
