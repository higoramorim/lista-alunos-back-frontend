const express = require('express');
const data = require('./data/data')

const app = express();

const PORT = 3000;

const cors = require('cors');

app.use(cors());

app.get('/api/v1/alunos', (req, res) => {
  res.send(data)
})

app.listen(PORT, console.log('listening on port ' +PORT))