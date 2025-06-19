export const passwordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z]).{4,}$/;
export const passwordErrMsg =
  'Password must be at least 4 characters long , at least one number and one special character';


 export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const emailErrMsg = 'Enter a valid email address (e.g., example@domain.com)';A