const User = require("./User");
const Cheese = require("./Cheese");
const Board = require("./Board");

User.hasMany(Board)
Board.belongsTo(User)

module.exports = {
    User,
    Cheese,
    Board
}