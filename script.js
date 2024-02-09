
const express = require('express')
const app = express()

// routing

app.get('/', function (req, res) {
  res.send('Hello Prem Sagar!!!,')
});

app.get('/msg', function (req, res) {
    res.send('Hello Prem Sagar!!, have a good day & learn nodeJs, Thank You')
  });
  
  app.get('/profile', function (req, res) {
    res.send('Hello i am Prem Sagar!!, this my pofile')
  });
  
app.listen(3000)