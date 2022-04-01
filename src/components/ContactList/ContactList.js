import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from 'redux/contacts/contacts-actions';
import ContactListItem from '../ContactListItem';
import { List } from './List.styled';

function ContactList({ filter, contacts, removeContact }) {
  const filterItem = name =>
    name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

  return (
    <List>
      {contacts.map(
        ({ id, name, number }) =>
          filterItem(name) && (
            <ContactListItem key={id} name={name} number={number}>
              <button onClick={() => removeContact(id)}>Delete</button>
            </ContactListItem>
          )
      )}
    </List>
  );
}

const mapStateToProps = ({ contact: { items, filter } }) => ({
  contacts: items,
  filter: filter,
});

const mapDispatchToProps = dispatch => ({
  removeContact: id => dispatch(contactsActions.deleteContact(id)),
});

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
  removeContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
