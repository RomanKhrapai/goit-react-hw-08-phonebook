import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { InputAdornment, Button, TextField, Box } from '@mui/material';
import {
  Password,
  HowToReg,
  AlternateEmail,
  AccountCircle,
} from '@mui/icons-material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>User Registration</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{ p: 2, border: '1px dashed grey', width: 320 }}
      >
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          variant="standard"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          type="mail"
          name="email"
          value={email}
          onChange={handleChange}
          label="E-mail"
          variant="standard"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          variant="standard"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Password />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" endIcon={<HowToReg />}>
          Log in
        </Button>
      </Box>
    </div>
  );
}
