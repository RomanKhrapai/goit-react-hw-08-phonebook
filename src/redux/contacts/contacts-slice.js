import { createSlice, current } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';
import { changeFiltre } from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [changeFiltre](state, { payload }) {
      state.filter = payload;
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = current(state).items.filter(
        contact => contact.id !== payload
      );
      state.isLoading = false;
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
