import { get, post } from './axios';
import { apiURL } from '../common';
import { AppDispatch } from '../redux';
import { ITenant } from '../pages/Tenant';
import { setTenant } from '../redux/slice/tenant.slice';

const tenantUrl = 'tenant'

export const StoreTenant = (data: ITenant) => async (dispatch: AppDispatch) => {
  try {
    const res = await post(`${apiURL}/${tenantUrl}`, data);
    alert(`Successfully Saved`)
    return res.data
  } catch (err: any) {
    throw err.response.data
  }
};

export const GetTenants = () => async (dispatch: AppDispatch) => {
  try{
    const user = await get(`${apiURL}/${tenantUrl}`)
    dispatch(setTenant(user.data.data));
    return user.data
  }
  catch (err: any) {
    throw err.response.data
  }
}