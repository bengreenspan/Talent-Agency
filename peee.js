

const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/talents');



const Client = conn.define('client', {
  name: {
    type: STRING,
  allowNull: false,
  unique: true
  }
});
const Talent = conn.define('Talent', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

const ClientTalent = conn.define("ClientTalent", {});

ClientTalent.belongsTo(Client);
ClientTalent.belongsTo(Talent);
Client.hasMany(ClientTalent);
Talent.hasMany(ClientTalent);

const data = {
clients: ['Scooby', 'Shaggy', 'Velma', 'Daphne', 'Freddy'],
talents: ['Eating', 'Searching', 'Chasing', 'Scared', 'Leadership', 'Wirefraud']
};

const syncAndSeed= async () => {
  await conn.sync({ force: true });

  const [Scooby, Shaggy, Velma, Daphne, Freddy] = await Promise.all(data.clients.map((client) => Client.create({name: client})));
    const [Eating, Searching, Chasing, Scared, Leadership, Wirefraud] = await Promise.all(data.talents.map((talent) => Talent.create({name: talent})));


await Promise.all([
  ClientTalent.create({ clientId: Scooby.id, talentId: Searching.id}),
  ClientTalent.create({ clientId: Scooby.id, talentId: Scared.id}),
  ClientTalent.create({ clientId: Shaggy.id, talentId: Wirefraud.id}),
  ClientTalent.create({ clientId: Shaggy.id, talentId: Leadership.id}),

]);


};





init();

