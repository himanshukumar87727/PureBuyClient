import * as yup from 'yup';

export const validationLoginSchema = yup.object().shape({
    // name: yup.string().matches(/^[A-Za-z\s]{2,30}$/,'only alphabets are required').required('name is required'),
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format').email('Invalid email address').required('Email is required'),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character').min(6, 'Password must be at least 6 characters').required('Password is required'),
    // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});