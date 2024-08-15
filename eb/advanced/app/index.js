const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT
const pg = require('pg')

const { Client } = pg
const client = new Client()
await client.connect()

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.put('/submit', function(req, res) {
  console.log(req.body);
});

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/style.css'));
});

app.get('/app.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/app.js'));
});

console.log(`PLANNING TO USE PORT: ${port}`)
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}!`))