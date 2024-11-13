import { get, post } from './axios';

import { apiURL, DataStore } from '../common';
import { setUser } from '../redux/slice/auth.slice';
import { ILogin } from '../pages/Login';

const loginUrl = 'login'

export const Login = (data: ILogin) => async (dispatch: any) => {
  try {
    const res = await post(`${apiURL}/${loginUrl}`, data);
    console.log(res.data)
    DataStore.set('ACCESS_TOKEN', res.data.data)
    const user = await get(`${apiURL}/user/me`)
    console.log(user.data.data)
    dispatch(setUser(user.data.data));
  } catch (err: any) {
    console.error(err.response.data);
  }
};