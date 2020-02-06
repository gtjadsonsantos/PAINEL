const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/view', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/view-2', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080,()=>{
  console.log('https://localhost:8080')
  console.log('Owner: https://github.com/jadson179')
});