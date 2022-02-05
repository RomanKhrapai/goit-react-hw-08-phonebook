import React from "react";
import PropTypes from 'prop-types'

const ContactListItem = ({id, name, number, children }) => {
   console.log(id);
    return(
    <li key={id}>
        {name} : {number}
        {children}
        </li>
    )   
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  }