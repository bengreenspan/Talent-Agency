
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());


const { models: {Talent, Client, ClientTalent}, syncAndSeed } = require('./db/db')

const { static } = express;
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())


app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get('/api/talents', async(req, res, next)=> {
  try {
    res.send(await Talent.findAll({
      include: [ClientTalent]
    }));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/clients', async(req, res, next)=> {
  try {
    res.send(await Client.findAll({
      include: [ClientTalent]
    }));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/ClientTalent', async(req, res, next)=> {
  try {
    res.send(await Client.findAll({
      include: [ClientTalent]
    }));
  }
  catch(ex){
    next(ex);
  }
});



app.put('/api/talents/:id', async(req, res, next)=> {
  try {
    res.send(await Talent.findAll({
      include: [ClientTalent]
    }));
  }
  catch(ex){
    next(ex);
  }
});


app.post('/api/ClientTalent', async(req, res, next)=> {
  try {
    res.status(201).send(
      await ClientTalent.create(req.body));
  }
  catch(ex){
    next(ex);
  }
});


app.delete('/api/ClientTalent/:id', async(req, res, next)=> {
  try {
    const clienttalent = await ClientTalent.findByPk(req.params.id);
    await clienttalent.destroy();
    res.sendStatus(204);
    }
  catch(ex){
    next(ex);
  };
});


const init = async()=> {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();