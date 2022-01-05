const conn = require("./db");
const Sequelize = require("sequelize");


const Client = conn.define('client', {
    name: {
      type: STRING,
    allowNull: false,
    unique: true
    }
  });

module.exports = Client;