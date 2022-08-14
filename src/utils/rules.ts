/* eslint-disable no-useless-escape */
const rules = {
  required: (message = 'Required field') => ({
    required: true,
    message,
  }),
  isEmailValid: (message = 'Incorrect value') => ({
    pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    message,
  }),
};

export default rules;
