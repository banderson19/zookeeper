const express = require('express');
const app = express();
const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001

app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
  });
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });
  