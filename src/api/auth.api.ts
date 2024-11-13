import { get, post } from './axios';

import { apiURL, DataStore } from '../common';
import { setUser } from '../redux/slice/auth.slice';
import { ILogin } from '../pages/Login';
import { AppDispatch } from '../redux';

const loginUrl = 'login'

export const Login = (data: ILogin) => async (dispatch: AppDispatch) => {
  try {
    const res = await post(`${apiURL}/${loginUrl}`, data);
    DataStore.set('ACCESS_TOKEN', res.data.data)
    dispatch(GetUserInfo())
    return res.data
  } catch (err: any) {
    throw err.response.data
  }
};

export const GetUserInfo = () => async (dispatch: AppDispatch) => {
  try{
    const user = await get(`${apiURL}/user/me`)
    dispatch(setUser(user.data.data));
    return user.data
  }
  catch (err: any) {
    throw err.response.data
  }
}