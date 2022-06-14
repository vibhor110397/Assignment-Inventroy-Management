const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    "inventorydb",
    "root",
    "",
    {
    dialect:"mysql"
    }
)
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Users = require('./users.js')(sequelize, Sequelize);


module.exports = {db}