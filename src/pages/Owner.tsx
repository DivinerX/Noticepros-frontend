import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask';
import * as Api from '../api'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux';

export interface IOwner {
  FirstName: string;
  LastName: string;
  BusinessName: string;
  Address: string;
  City: string;
  Unit: string;
  State: string;
  ZipCode: string;
  County: string;
  TelePhone: string;
  TelePhoneCell: string;
  TelePhoneFax: string;
  Email1: string;
  Email2: string;
  Role: string;
}

const Owner: React.FC = () => {
  const [formData, setFormData] = useState<IOwner>({
    FirstName: '',
    LastName: '',
    BusinessName: '',
    Address: '',
    Unit: '',
    City: '',
    State: 'California',
    ZipCode: '',
    County: '',
    TelePhone: '',
    TelePhoneCell: '',
    TelePhoneFax: '',
    Email1: '',
    Email2: '',
    Role: 'owner'
  });
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    dispatch(Api.StoreOwner(formData))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-10 shadow-lg rounded-lg w-full max-w-lg space-y-2"
      >
        <h2 className="text-2xl font-bold mb-1 text-gray-800">Owner Form</h2>
        <p> This is owner information.</p>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">First name</label>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">Last name</label>
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Business name</label>
          <input
            type="text"
            name="BusinessName"
            value={formData.BusinessName}
            onChange={handleChange}
            className="w-full p-1 mt-1 border rounded text-sm"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">Street Address</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">Unit or Suite</label>
            <input
              type="text"
              name="Unit"
              value={formData.Unit}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">City</label>
            <input
              type="text"
              name="City"
              value={formData.City}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">State</label>
            <input
              type="text"
              name="State"
              value={formData.State}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
              readOnly
            />
          </div>
        </div>
        <div className="flex space-x-4">

          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">County</label>
            <select
              name="County"
              value={formData.County}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            >
              <option value=""></option>
              <option value="Alameda">Alameda</option>
              <option value="Alpine">Alpine</option>
              <option value="Amador">Amador</option>
              <option value="Butte">Butte</option>
              <option value="Calaveras">Calaveras</option>
              <option value="Colusa">Colusa</option>
              <option value="Contra Costa">Contra Costa</option>
              <option value="Del Norte">Del Norte</option>
              <option value="El Dorado">El Dorado</option>
              <option value="Fresno">Fresno</option>
              <option value="Glenn">Glenn</option>
              <option value="Humboldt">Humboldt</option>
              <option value="Imperial">Imperial</option>
              <option value="Inyo">Inyo</option>
              <option value="Kern">Kern</option>
              <option value="Kings">Kings</option>
              <option value="Lake">Lake</option>
              <option value="Lassen">Lassen</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Madera">Madera</option>
              <option value="Marin">Marin</option>
              <option value="Mariposa">Mariposa</option>
              <option value="Mendocino">Mendocino</option>
              <option value="Merced">Merced</option>
              <option value="Modoc">Modoc</option>
              <option value="Mono">Mono</option>
              <option value="Monterey">Monterey</option>
              <option value="Napa">Napa</option>
              <option value="Nevada">Nevada</option>
              <option value="Orange">Orange</option>
              <option value="Placer">Placer</option>
              <option value="Plumas">Plumas</option>
              <option value="Riverside">Riverside</option>
              <option value="Sacramento">Sacramento</option>
              <option value="San Benito">San Benito</option>
              <option value="San Bernardino">San Bernardino</option>
              <option value="San Diego">San Diego</option>
              <option value="San Francisco">San Francisco</option>
              <option value="San Joaquin">San Joaquin</option>
              <option value="San Luis Obispo">San Luis Obispo</option>
              <option value="San Mateo">San Mateo</option>
              <option value="Santa Barbara">Santa Barbara</option>
              <option value="Santa Clara">Santa Clara</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Shasta">Shasta</option>
              <option value="Sierra">Sierra</option>
              <option value="Siskiyou">Siskiyou</option>
              <option value="Solano">Solano</option>
              <option value="Sonoma">Sonoma</option>
              <option value="Stanislaus">Stanislaus</option>
              <option value="Sutter">Sutter</option>
              <option value="Tehama">Tehama</option>
              <option value="Trinity">Trinity</option>
              <option value="Tulare">Tulare</option>
              <option value="Tuolumne">Tuolumne</option>
              <option value="Ventura">Ventura</option>
              <option value="Yolo">Yolo</option>
              <option value="Yuba">Yuba</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">Zip Code</label>
            <input
              type="text"
              name="ZipCode"
              value={formData.ZipCode}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
        </div>
        <div className='flex space-x-4'>
          <div className="w-1/3">
            <label className="block text-gray-600 font-medium">TelePhone</label>
            <InputMask
              mask="999-999-9999"
              placeholder="###-###-####"
              name="TelePhone"
              value={formData.TelePhone}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-600 font-medium">TelePhoneCell</label>
            <InputMask
              mask="999-999-9999"
              placeholder="###-###-####"
              name="TelePhoneCell"
              value={formData.TelePhoneCell}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-600 font-medium">TelePhoneFax</label>
            <InputMask
              mask="999-999-9999"
              placeholder="###-###-####"
              name="TelePhoneFax"
              value={formData.TelePhoneFax}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="Email1"
              value={formData.Email1}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="Email2"
              value={formData.Email2}
              onChange={handleChange}
              className="w-full p-1 mt-1 border rounded text-sm"
              required
            />
          </div>
        </div>

        <p>Or you can log in <Link to="/login" className='text-blue-600 py-3'>here</Link></p>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Owner;
