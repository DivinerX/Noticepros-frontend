import { get, post } from './axios';

import { apiURL, DataStore } from '../common';
import { setUser } from '../redux/slice/auth.slice';
import { ILogin } from '../pages/Login';

const loginUrl = 'login'

export const Login = (data: ILogin) => async (dispatch: any) => {
  try {
    const res = await post(`${apiURL}/${loginUrl}`, data);
    DataStore.set('token', res.data)
    const user = await get(`${apiURL}/me`)
    dispatch(setUser(user.data));
  } catch (err) {
    console.error(err);
  }
};