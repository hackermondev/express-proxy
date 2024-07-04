const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', async (req, res) => {
  const url = req.query['url'];
  if (!url) return res.status(400).end();
  
  const request = await fetch(url);
  res.status(request.status).send(await request.text());
});

app.listen(process.env['PORT'] || 3000);
