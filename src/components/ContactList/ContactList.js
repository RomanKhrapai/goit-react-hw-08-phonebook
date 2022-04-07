/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cotactsOperation from '../../redux/contacts/contacts-operations';
import { getFilter, getItem } from 'redux/contacts/contacts-selector';
import ContactListItem from '../ContactListItem';

import { List } from './List.styled';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getItem);
  const dispatch = useDispatch();

  const filterItem = name =>
    name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

  useEffect(() => {
    dispatch(cotactsOperation.fetchContacts());
  }, []);

  return (
    <List>
      {contacts.map(
        ({ id, name, phone }) =>
          filterItem(name) && (
            <ContactListItem key={id} name={name} number={phone}>
              <button
                onClick={() => {
                  dispatch(cotactsOperation.deleteContact(id));
                  // dispatch(cotactsOperation.fetchContacts());
                }}
              >
                Delete
              </button>
            </ContactListItem>
          )
      )}
    </List>
  );
}
