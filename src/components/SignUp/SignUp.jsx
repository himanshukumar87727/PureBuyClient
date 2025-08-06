import { useFormik } from 'formik';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { BsBagHeartFill } from 'react-icons/bs';
import axios from 'axios';
import { validationSignUpSchema } from './Validation';
import { showSuccessToast, showErrorToast } from '../ToastNotification/Notification';
import { useNavigate } from 'react-router-dom';
import {APIURL} from '../../GlobalAPIURL';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});



export default function SignUp() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: { name: '', email: '', password: '', },

    validationSchema: validationSignUpSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${APIURL}createUser`, values);
        const id = response.data.data._id
        const email = response.data.data.email

        if (response.status == 200 || response.status == 201) {

          showSuccessToast(response.data.msg);
          sessionStorage.setItem('UserEmail', email)
          navigate(`/otp-verification/otp-verification/${id}`)
          // alert('User registered successfully!');
          resetForm();
        }

      } catch (err) {
        if (err.response?.data?.msg == "Account already verified, please login") {
          showErrorToast(err.response?.data?.msg || 'Something went wrong!');
          navigate('/login')
        }
        else showErrorToast(err.response?.data?.msg || 'An error occurred');
      

      }
    },
  });

  const inputFields = [
  { name: 'name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', type: 'password', placeholder: 'Enter your password' },
];

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Info Section */}
      <div className="w-1/2 bg-green-600 text-white flex justify-center items-center px-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-4xl font-bold">
            <BsBagHeartFill className="text-white" />
            PureBuy
          </div>
          <p className="text-lg">Fresh groceries at your doorstep in 10 minutes!</p>
          <ul className="text-md space-y-2">
            <li>🥕 Order fresh fruits, veggies & dairy.</li>
            <li>🚴 Superfast delivery across your city.</li>
            <li>💳 Pay online or on delivery.</li>
          </ul>
        </div>
      </div>


      {/* Right Form Section */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <div className="w-[400px] bg-white shadow-lg p-8 rounded-xl">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${touched[field.name] && errors[field.name]
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-green-500'
                    }`}
                />
                {touched[field.name] && errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}

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
