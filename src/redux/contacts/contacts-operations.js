import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfApi from '../../services/contactshelf-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => await contactShelfApi.fetchContacts()
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async id => (await contactShelfApi.deleteContact(id)).id
);

export const addContact = createAsyncThunk(
  'contacts/changeFiltre',
  async item => await contactShelfApi.addContact(item)
);
