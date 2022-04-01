import React from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import contactsActions from 'redux/contacts/contacts-actions';
import { LableFilter } from './LableFilter.styles';

const Filter = ({ onChange }) => {
  const filterInputId = nanoid();
  return (
    <>
      <LableFilter htmlFor={filterInputId}>Find contacts by name</LableFilter>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFiltre(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
