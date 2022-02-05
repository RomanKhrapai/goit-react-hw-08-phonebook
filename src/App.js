import { Component} from 'react'
import { nanoid } from 'nanoid'

import './App.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component{
  state = {
    contacts: [],
    filter: '',
  }

formSudmitHandler = data => {
  if(!this.state.contacts.find(
    contact=>
    contact.name.toLowerCase() === data.name.toLowerCase()))
      {
        this.setState({
        contacts:[...this.state.contacts,{...data , id:nanoid()}],
        })
        return true;
      }else{
        alert('Rosie Simpson is already in contacts.'); 
      }
}

removeContact = evt=>{
this.setState({
  contacts: this.state.contacts.filter(contact=> contact.id !== evt.target.dataset.id),
})
}

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={this.formSudmitHandler}/> 
      <h2>Contacts</h2>
      <Filter  handleChange={this.handleChange}/>
      <ContactList 
        filter={this.state.filter}
        contacts={this.state.contacts}
        removeContact={this.removeContact}
      />
    </>
  );
}
}

export default App;
