const { sequelize } = require("../src/db/connection");
const { User } = require("../src/models/User");
const { Cheese } = require("../src/models/Cheese");
const { Board } = require("../src/models/Board");

describe("Tests for Models", () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    describe("User Model", () => {
        test("checks that a user model can be created", async () => {
            let newUser = await User.create({ name: "Tom", email: "massivelegend@email.com" })

            expect(newUser).not.toBe(null);
            expect(newUser).toBeTruthy();
        });
    });
    describe("Cheese Model", () => {
        test("checks that a cheese model can be created", async () => {
            let newCheese = await Cheese.create({ title: "Mozzarella", description: "Mozzarella is a southern Italian cheese traditionally made from Italian buffalo's milk by the pasta filata method." })

            expect(newCheese).not.toBe(null);
            expect(newCheese).toBeTruthy();
        });
    });
    describe("Board Model", () => {
        test("checks that a board model can be created", async () => {
            let newBoard = await Board.create({ type: "Blue Cheese", description: "A collection of blue cheeses from Europe", rating: 2 })

            expect(newBoard).not.toBe(null);
            expect(newBoard).toBeTruthy();
        });
    });
    
});