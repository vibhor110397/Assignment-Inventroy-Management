const jwt = require('jsonwebtoken')
const config = require('./../config/config');

const signToken = id => {
    return jwt.sign({ id }, config.jwt.secret, {
      expiresIn: config.jwt.accessExpirationMinute
    });
  };

exports.createSendToken = (user) => {
    const token = signToken(user._id);
    user.password = undefined;
    return ({
        token,data:{
            user
        }
    })
  }