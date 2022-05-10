import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      if (errorData.status === 400) {
        return rejectWithValue('Error creating user!!!');
      }
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!!!');
      }
      if (errorData.status === 500) {
        return rejectWithValue('Server error!!!');
      }
      return rejectWithValue('Unknown error!!!');
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      if (errorData.status === 400) {
        return rejectWithValue('Authorization error!!!');
      }
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!!!');
      }
      return rejectWithValue('Unknown error!!!');
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      if (errorData.status === 401) {
        return rejectWithValue(
          'There is no header with authorization token!!!'
        );
      }
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!!!');
      }
      if (errorData.status === 500) {
        return rejectWithValue('Server error!!!');
      }
      return rejectWithValue('Unknown error!!!');
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      thunkAPI.rejectedWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch {
      error => {
        return error;
      };
    }
  }
);

export default { register, logIn, logOut, fetchCurrentUser };
