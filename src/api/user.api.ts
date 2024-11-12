import { post } from './axios';

import { apiURL } from '../common';
import { setOwner } from '../redux/slice/owner.slice';
import { ILandlord } from '../pages/Owner';

const landlordPartUrl = 'landlord'

export const StoreLandlord = (data: ILandlord) => async (dispatch: any) => {
  try {
    const res = await post(`${apiURL}/${landlordPartUrl}`, data);
    dispatch(setOwner(res.data));
  } catch (err) {
    console.error(err);
  }
};