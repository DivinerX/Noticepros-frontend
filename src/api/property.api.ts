import { get, post } from './axios';
import { apiURL } from '../common';
import { AppDispatch } from '../redux';
import { IProperty } from '../pages/Property';
import { setProperty } from '../redux/slice/property.slice';

const propertyUrl = 'property'

export const StoreProperty = (data: IProperty) => async (dispatch: AppDispatch) => {
  try {
    const res = await post(`${apiURL}/${propertyUrl}`, data);
    alert(`Successfully Saved`)
    return res.data
  } catch (err: any) {
    throw err.response.data
  }
};

export const GetProperties = () => async (dispatch: AppDispatch) => {
  try{
    const user = await get(`${apiURL}/${propertyUrl}`)
    dispatch(setProperty(user.data.data));
    return user.data
  }
  catch (err: any) {
    throw err.response.data
  }
}