const {Sequelize, sequelize} = require("../db/connection");

let User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = {
    User
};