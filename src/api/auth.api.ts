import { get, post } from './axios';

import { apiURL, DataStore } from '../common';
import { setUser } from '../redux/slice/auth.slice';
import { ILogin } from '../pages/Login';
import { AppDispatch } from '../redux';

const loginUrl = 'login'

export const Login = (data: ILogin) => async (dispatch: AppDispatch) => {
  try {
    const res = await post(`${apiURL}/${loginUrl}`, data);
    console.log(res.data)
    DataStore.set('ACCESS_TOKEN', res.data.data)
    dispatch(GetUserInfo())
  } catch (err: any) {
    console.error(err.response.data);
  }
};

export const GetUserInfo = () => async (dispatch: AppDispatch) => {
  try{
    const user = await get(`${apiURL}/user/me`)
    console.log("GetUserInfo ", user.data.data)
    dispatch(setUser(user.data.data));
  }
  catch (err: any) {
    console.error(err.response.data)
  }
}