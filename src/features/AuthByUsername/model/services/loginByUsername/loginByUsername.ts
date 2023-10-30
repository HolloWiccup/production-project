import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error');
    }
  },
);
