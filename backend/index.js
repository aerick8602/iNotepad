const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { PORT, mongoDBURL } = require('./connection/connect');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Application connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => res.status(200).send("Hello fork, Welcome to iNotepad 🤩🤩"));
