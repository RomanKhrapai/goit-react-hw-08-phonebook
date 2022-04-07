/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfApi from '../../services/contactshelf-api';
import * as actions from './contacts-actions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactShelfApi.fetchContacts();
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/fetchContacts',
  async id => {
    const contact = await contactShelfApi.deleteContact(id);
    console.log(contact);
    actions.deleteContact(contact.id);
    //  return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/fetchContacts',
  async item => {
    const contact = await contactShelfApi.addContact(item);
    console.log(contact);
    actions.addContact(contact.id);
    // return contacts;
  }
);
