const validator = require('validator');

const validateSignUp = (req) => {
  const { firstName, lastName, emailId, password, age, gender } = req.body;

  // Check if firstName and lastName are provided
  if (!firstName || !lastName) {
    throw new Error("First Name and Last Name are required!!");
  }

  // Check if emailId is provided
  if (!emailId) {
    throw new Error("Email ID is required!!");
  }

  // Check if emailId is valid
//   if (!validator.isEmail(emailId)) {
//     throw new Error("Email ID is not valid!!");
//   }

  // Check if password is strong
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong  use oneUpperCase , one special charater , one numbers  and  size>8!!");
  }

  // You can add more validations here if necessary for 'age' or 'gender'
};

module.exports = validateSignUp;
