import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfApi from '../../services/contactshelf-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactShelfApi.fetchContacts();
    } catch (error) {
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      return rejectWithValue('Error accessing contacts !!!');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      return (await contactShelfApi.deleteContact(id)).id;
    } catch (error) {
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      return rejectWithValue('Error deleting contact !!!');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/changeFiltre',
  async (item, { rejectWithValue }) => {
    try {
      return await contactShelfApi.addContact(item);
    } catch (error) {
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      return rejectWithValue('Error unable to add contact !!!');
    }
  }
);
