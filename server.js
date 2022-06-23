require('dotenv').config({ path: 'config.env' });
const bodyparser = require("body-parser");
const express = require('express');
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
const mongoString = process.env.DATABASE_URL;
const brandsRouts = require('./routes/brandsRoute');


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('err', (err) => {
  console.log(err);
});

database.once('connected', () => {
  console.log('Database Connected');
});
 
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
console.log(`App running on port ${port}...`);
});

app.use('/api', brandsRouts);