import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from 'components/AppBar';
import RegisterView from 'views/RegisterView';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import PhoneBookView from 'views/PhnebookView';
import { Container } from 'components/Container.styles';
import './App.css';
import authOperations from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/phoneBook" element={<PhoneBookView />} />
      </Routes>
    </Container>
  );
}

export default App;
