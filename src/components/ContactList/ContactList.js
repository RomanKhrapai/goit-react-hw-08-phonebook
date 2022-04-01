/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { getFilter, getItem } from 'redux/contacts/contacts-selector';
import ContactListItem from '../ContactListItem';
import { List } from './List.styled';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getItem);
  const dispatch = useDispatch();

  const filterItem = name =>
    name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

  return (
    <List>
      {contacts.map(
        ({ id, name, number }) =>
          filterItem(name) && (
            <ContactListItem key={id} name={name} number={number}>
              <button
                onClick={() => dispatch(contactsActions.deleteContact(id))}
              >
                Delete
              </button>
            </ContactListItem>
          )
      )}
    </List>
  );
}
