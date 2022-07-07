const User = require('../models/userModel')



const createUser = async (userBody) => {
    return User.create(userBody);
  };

const getUserByEmail = async (email) => {
return User.findOne({ email }).select('+password');
};
const getUserById = async (id) => {
    return User.findById(id).select('+password');
    };

const getUserWhenResetEmail = async (hashedToken,passwordResetExpires)=>{
    return await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires
      });
}
    

  module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getUserWhenResetEmail
  };

