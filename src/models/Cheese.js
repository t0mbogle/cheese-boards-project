const {Sequelize, sequelize} = require("../db/connection");

let Cheese = sequelize.define('cheese', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

module.exports = {
    Cheese
};