
const path = require('path');
const express = require('express');
const app = express();

const { models: {Talent, Client, ClientTalent}, syncAndSeed } = require('./db/db')

const { static } = express;
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())


app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/clients', async(req, res, next)=> {
  try {
    res.send(await Client.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/talents', async(req, res, next)=> {
  try {
    res.send(await Talent.findAll());
  }
  catch(ex){
    next(ex);
  }
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