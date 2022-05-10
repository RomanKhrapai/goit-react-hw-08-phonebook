import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { InputAdornment, Button, TextField, Box } from '@mui/material';
import { Password, Login, AlternateEmail } from '@mui/icons-material';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>User Login</h1>

      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{ p: 2, border: '1px dashed grey', width: 320 }}
      >
        <TextField
          type="mail"
          name="email"
          value={email}
          onChange={hendleChange}
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
          onChange={hendleChange}
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
        <Button variant="contained" type="submit" endIcon={<Login />}>
          Log in
        </Button>
      </Box>
    </div>
  );
}
