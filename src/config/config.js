module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET,
        accessExpirationMinute: process.env.JWT_EXPIRES_IN
      },
    email:{
      username: process.env.EMAIL_USERNAME,
      password : process.env.EMAIL_PASSWORD,
      host : process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT
    },
    db:{
      url: process.env.DB_URL,
      pass: process.env.DB_PASS
    }
}