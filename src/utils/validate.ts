import * as yup from 'yup';

export const registerValidate = yup.object().shape({
  username: yup.string().required('Username must be required'),
  email: yup.string().email().required('Email must be required'),
  password: yup.string().min(8).required('Password must be required'),
  confirmPassword: yup
    .string()
    .required('Confirm Password must be required')
    .oneOf([yup.ref('password'), ''], 'Password not match'),
});
