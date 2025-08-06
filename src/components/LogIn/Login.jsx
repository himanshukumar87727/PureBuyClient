import { useFormik } from 'formik';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { BsBagHeartFill } from 'react-icons/bs';
import axios from 'axios';
import { validationLoginSchema } from './Validation';
import { showSuccessToast, showErrorToast } from '../ToastNotification/Notification';
import { useNavigate } from 'react-router-dom';
import { APIURL } from '../../GlobalAPIURL';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, buttonVariants } from './Motion';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    dirty
  } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationLoginSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post(`${APIURL}LoginUser`, values);
        const id = response.data.data._id;
        const token = response.data.data.token;

        if (response.status === 200 || response.status === 201) {
          showSuccessToast('Successfully login');
          sessionStorage.setItem('UserId', id);
          sessionStorage.setItem('UserToken', token);
          navigate('/');
        }
      } catch (err) {
        if (err.response?.data?.msg === 'Account already verified, please login') {
          showErrorToast(err.response?.data?.msg);
          navigate('/login');
        } else {
          showErrorToast(err.response?.data?.msg || 'An error occurred');
        }
      } finally {
        setLoading(false);
      }
    }
  });

  const inputFields = [
    { name: 'email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', type: 'password', placeholder: 'Enter your password' },
    // { name: 'confirmPassword', type: 'password', placeholder: 'Enter your confirm password' },
  ];

  const isButtonDisabled = loading || !isValid || !dirty;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen font-sans"
    >
      {/* Left Info Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 bg-green-600 text-white flex justify-center items-center px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          <motion.div className="flex items-center justify-center gap-2 text-4xl font-bold">
            <BsBagHeartFill className="text-white" />
            PureBuy
          </motion.div>
          <motion.p className="text-lg">Fresh groceries at your doorstep in 10 minutes!</motion.p>
          <motion.ul className="text-md space-y-2">
            <motion.li variants={itemVariants}>🥕 Order fresh fruits, veggies & dairy.</motion.li>
            <motion.li variants={itemVariants}>🚴 Superfast delivery across your city.</motion.li>
            <motion.li variants={itemVariants}>💳 Pay online or on delivery.</motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 bg-white flex justify-center items-center"
      >
        <motion.div className="w-[400px] bg-white shadow-lg p-8 rounded-xl space-y-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-green-600 mb-2">Login to Continue</h2>
            <p className="text-sm text-gray-600">Continue where you left off</p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md mb-4 hover:shadow"
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium">Sign in with Google</span>
          </motion.button>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {inputFields.map((field, index) => (
              <motion.div key={field.name} variants={itemVariants} className="flex flex-col">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                    touched[field.name] && errors[field.name]
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-green-500'
                  }`}
                />
                {touched[field.name] && errors[field.name] && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors[field.name]}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="flex justify-between items-center">
              <label className="flex items-center text-sm gap-2">
                <input type="checkbox" className="accent-green-600" />
                Save password
              </label>
              <button
                type="button"
                className="text-sm text-green-600 hover:underline"
              >
                Forgot password?
              </button>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isButtonDisabled}
              variants={buttonVariants}
              whileHover={!isButtonDisabled ? { scale: 1.02 } : {}}
              whileTap={!isButtonDisabled ? { scale: 0.98 } : {}}
              className={`w-full bg-green-600 text-white py-2 rounded-md font-semibold transition ${
                isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
              }`}
            >
              {loading ? (
                <motion.div
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </motion.svg>
                  Processing...
                </motion.div>
              ) : (
                'Log In'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
