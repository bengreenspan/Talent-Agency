const conn = require("./db");
const Sequelize = require("sequelize");

const Talent = conn.define('Talent', {
    name: {
      type: STRING,
      allowNull: false,
    },
  });
  

module.exports = Talent;