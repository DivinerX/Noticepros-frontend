import { post } from './axios';

import { apiURL, DataStore } from '../common';
import { IOwner } from '../pages/Owner';
import { AppDispatch } from '../redux';
import { GetUserInfo } from './auth.api';

const userUrl = 'user'

export const StoreOwner = (data: IOwner) => async (dispatch: AppDispatch) => {
  try {
    const res = await post(`${apiURL}/${userUrl}`, data);
    DataStore.set('ACCESS_TOKEN', res.data.data.Token)
    alert(`Your password is ${res.data.data.Password}`)
    dispatch(GetUserInfo());
  } catch (err) {
    console.error(err);
  }
};