import React, { forwardRef, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import * as Api from '../api';
import { AppDispatch } from '../redux';
import { ITenant } from '../pages/Tenant';

interface TenantFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TenantFormModal = forwardRef<HTMLDivElement, TenantFormModalProps>(
  ({ isOpen, onClose }, ref) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState<ITenant>({
      FirstName: '',
      LastName: '',
      Telephone: '',
      TelephoneCell: '',
      TelephoneFax: '',
      Email1: '',
      Email2: '',
      SS: '',
      DOB: '',
      DL: '',
      DLST: ''
    });

    const dispatch: AppDispatch = useDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      dispatch(Api.StoreTenant(formData))
        .then(() => {
          onClose();
          dispatch(Api.GetTenants());
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md" ref={ref}>
          <h2 className="text-lg font-semibold mb-2">Tenant Information Form</h2>
          <form onSubmit={handleSubmit}>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>

              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 items-end">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Primary Telephone</label>
                <InputMask
                  mask="999-999-9999"
                  placeholder="###-###-####"
                  name="Telephone"
                  value={formData.Telephone || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>

              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Secondary Telephone</label>
                <InputMask
                  mask="999-999-9999"
                  placeholder="###-###-####"
                  name="TelephoneCell"
                  value={formData.TelephoneCell}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>

              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Fax</label>
                <InputMask
                  mask="999-999-9999"
                  placeholder="###-###-####"
                  name="TelephoneFax"
                  value={formData.TelephoneFax}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Primary Email</label>
                <input
                  type="email"
                  name="Email1"
                  value={formData.Email1}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
              </div>

              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Secondary Email</label>
                <input
                  type="email"
                  name="Email2"
                  value={formData.Email2 || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Social Security Number</label>
                <input
                  type="text"
                  name="SS"
                  value={formData.SS || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>

              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="DOB"
                  value={formData.DOB || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Driver's License</label>
                <input
                  type="text"
                  name="DL"
                  value={formData.DL || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>

              <div className="flex-1 mb-4">
                <label className="text-md font-medium text-gray-700">Driver's License State</label>
                <input
                  type="text"
                  name="DLST"
                  value={formData.DLST || ''}
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
        </div >
      </div >
    );
  }
);

export default TenantFormModal;
