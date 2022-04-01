import React from 'react';
import { Toaster } from 'react-hot-toast';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from 'components/ContactList';
import { Layout } from './components/Layout.styles';
import './App.css';

function App() {
  return (
    <Layout>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />
    </Layout>
  );
}

export default App;
