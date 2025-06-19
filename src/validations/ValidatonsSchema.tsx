import * as Yup from 'yup';
import {emailErrMsg, emailRegex, passwordErrMsg, passwordRegex} from '../Components/TextInput/Regex/regex';
export const SignUpVSchema = Yup.object({
  firstName: Yup.string()
    .label('First Name')
    .required('First Name is required'),
  lastName: Yup.string().label('Last Name').required('Last Name is required'),
  email: Yup.string()
    .label('Email')
    .matches(emailRegex, emailErrMsg)
    .required('Email is required'),

  password: Yup.string()
    .label('Password')
.matches(passwordRegex, passwordErrMsg)
    .required('Password is required')
    .min(6),
  confirmpassword: Yup.string()
    .label('Confirm Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
    .min(6),
  phone: Yup.string()
    .label('Phone Number')
    .required('Phone Number is required')
    .matches(/^[0-9]{1,10}$/, 'Phone number must be between 1 and 10 digits'),
});
