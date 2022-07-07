const userService = require('./user.service')


const loginUserWithEmailAndPassword = async (email, password) => {
    const user = await userService.getUserByEmail(email);
    if (!user || !(await user.correctPassword(password,user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }
    // If everything ok, Update Last login time
    await user.updateLastLogin()

    return user;
  };
  

module.exports = {
    loginUserWithEmailAndPassword
}