import React from "react";
import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem';

const ContactList = ({filter, contacts ,removeContact }) => {

    const filterItem = name =>  name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

return(
    <ul>
    {contacts.map(({id,name,number})=> 
        filterItem(name) &&
            <ContactListItem 
                key = {id}
                name = {name} 
                number = {number}
            >
                <button data-id ={id} onClick={removeContact}>Delete</button>
            </ContactListItem>
    )}
    </ul>
)   
}

export default ContactList;

ContactList.propTypes = {
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object),
    removeContact: PropTypes.func.isRequired,
  }