module.exports = (sequelize, Sequelize) => {
const Users = sequelize.define('user',{
    email:{
        type: Sequelize.STRING,
        validate:{
            isEmail:true,
            notNull: {
                msg: 'Please enter your email'
              }
        },
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notNull: {
                msg: 'Please enter your password'
              }
        },
    },
    confirmPassword:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notNull: {
                msg: 'Please enter your password'
              }
        },
    },
    role:{
        type:Sequelize.ENUM("ADMIN","USER"),
        defaultValue: "USER"
    }
})
    return Users;
}