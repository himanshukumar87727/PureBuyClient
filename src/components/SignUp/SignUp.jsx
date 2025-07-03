
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsBagHeartFill } from 'react-icons/bs';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/createUser', formData);

      console.log(res);
      alert('User registered successfully!');

    } catch (err) {
      alert(err.response?.data?.msg || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Side Info */}
      <div className="w-1/2 bg-green-600 text-white flex flex-col justify-center items-center px-8">
        <div className="flex items-center gap-2 text-4xl font-bold mb-4">
          <BsBagHeartFill className="text-white" />
          PureBuy
        </div>
        <p className="text-lg text-center mb-6">
          Fresh groceries at your doorstep in 10 minutes!
        </p>
        <ul className="text-md space-y-2 text-center">
          <li>🥦 Order fresh fruits, veggies & dairy.</li>
          <li>🚴 Superfast delivery across your city.</li>
          <li>💳 Pay online or on delivery.</li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-[400px] h-[500px] shadow-lg p-8 rounded-md">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Create Account</h2>
          <p className="text-sm text-gray-600 mb-4">
            Sign up to get started with PureBuy
          </p>

          <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md mb-4 hover:shadow">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>

          <div className="flex items-center gap-2 mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <label className="flex items-center text-sm gap-2">
              <input type="checkbox" className="accent-green-600" />
              Save password
            </label>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
