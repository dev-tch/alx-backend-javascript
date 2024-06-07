const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.param('id', function (req, res, next, id) {
  nb = Number(id)
  if (isNaN(nb)) {
    res.statusCode = 404
    res.end('Not Found')
  } else {
    req.cartId = nb; 
  }
  next();
})
app.get('/cart/:id', function (req, res, next) {
  id = req.cartId;
  const msg = `Payment methods for cart ${id}`;
  res.statusCode = 200;
  res.end(msg);
})

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
