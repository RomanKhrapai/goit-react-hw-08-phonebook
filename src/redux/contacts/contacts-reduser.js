import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFiltre]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
