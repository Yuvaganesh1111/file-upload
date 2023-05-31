const express = require('express');

const app = express();
const postone=require('./src/controllers/postone')
const postmany=require('./src/controllers/postmany')
app.use(postone);
app.use(postmany);

app.listen(4000, () => {
    console.log('Server started on port 4000');
  });