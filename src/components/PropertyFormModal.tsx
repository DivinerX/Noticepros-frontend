import React, { forwardRef, useState } from 'react';
import { IProperty } from '../pages/Property';
import * as Api from '../api';
import { AppDispatch } from '../redux';
import { useDispatch } from 'react-redux';

interface PropertyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PropertyFormModal = forwardRef<HTMLDivElement, PropertyFormModalProps>(
  ({ isOpen, onClose }, ref) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState<IProperty>({
      Name: '',
      Address: '',
      Unit: '',
      City: '',
      State: 'California',
      ZipCode: '',
      County: '',
      NumUnitTotal: undefined
    });

    const dispatch: AppDispatch = useDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      dispatch(Api.StoreProperty(formData))
        .then((data) => {
          console.log(data);
          onClose();
          dispatch(Api.GetProperties());
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md" ref={ref}>
          <h2 className="text-lg font-semibold mb-2">Rented Property Address Form</h2>
          <p className="text-sm text-gray-600 mb-4">This form is for adding a rented property address.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-md font-medium text-gray-700">Property Name</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-md font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Unit or Suite</label>
                <input
                  type="text"
                  name="Unit"
                  value={formData.Unit}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">County</label>
                <select
                  name="County"
                  value={formData.County}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                >
                  <option value=""></option>
                  <option value="Alameda">Alameda</option>
                  <option value="Alpine">Alpine</option>
                  {/* Add remaining options here */}
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="City"
                  value={formData.City}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">State</label>
                <input
                  type="text"
                  name="State"
                  value={formData.State}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded text-sm bg-gray-100"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="ZipCode"
                  value={formData.ZipCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Number of Units</label>
                <input
                  type="number"
                  name="NumUnitTotal"
                  value={formData.NumUnitTotal || undefined}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="w-2/3 mt-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 mt-4 py-2 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default PropertyFormModal;
