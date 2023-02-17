const { Sequelize, sequelize } = require("../src/db/connection");
const { User } = require("../src/models/User");
const { Cheese } = require("../src/models/Cheese");
const { Board } = require("../src/models/Board");

describe("Tests for Models", () => {
    describe("User Model", () => {
        test("checks that a user model can be created", () => {
            let newUser = new User({ name: "Tom", email: "massivelegend@email.com" })

            expect(newUser).not.toBe(null);
            expect(newUser).toBeTruthy();
        });
    });
    describe("Cheese Model", () => {
        test("checks that a cheese model can be created", () => {
            let newCheese = new Cheese({ title: "Mozzarella", description: "Mozzarella is a southern Italian cheese traditionally made from Italian buffalo's milk by the pasta filata method." })

            expect(newCheese).not.toBe(null);
            expect(newCheese).toBeTruthy();
        });
    });
    describe("Board Model", () => {
        test("checks that a board model can be created", () => {
            let newBoard = new Board({ type: "Blue Cheese", description: "A collection of blue cheeses from Europe", rating: 2 })

            expect(newBoard).not.toBe(null);
            expect(newBoard).toBeTruthy();
        });
    });
    
});