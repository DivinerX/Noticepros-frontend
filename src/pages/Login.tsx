import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as Api from '../api'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux';
import { useAppNavigation } from '../common/useAppNavigation';
import useToastr from '../common/useToastr';

export interface ILogin {
  email: string;
  password: string;
  type: number;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<ILogin>({
    email: '',
    password: '',
    type: 1,
  });
  const dispatch: AppDispatch = useDispatch();
  const { navigateToHome } = useAppNavigation();
  const { success, error, info, warning } = useToastr();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    dispatch(Api.Login(formData)).then((data) => {
      console.log(data)
      success(data.data)
      navigateToHome()
    }).catch(err => {
      error(err.data)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-10 shadow-lg rounded-lg w-full max-w-lg space-y-2"
      >
        <h2 className="text-2xl font-bold mb-1 text-gray-800">Log in</h2>
        <p>If you used this service before? Then please log in.</p>
        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-1 mt-1 border rounded text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-1 mt-1 border rounded text-sm"
            required
          />
        </div>
        
        <p>Or you can register <Link to="/owner" className='text-blue-600 py-3'>here</Link></p>
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

export default Login;
