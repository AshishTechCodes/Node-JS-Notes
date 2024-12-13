const express = require('../../../node_modules/express');
const mongoose = require('../../../node_modules/mongoose');
const bodyParser = require('../../../node_modules/body-parser');
const path = require('path');

const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/insert.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/formDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Create a Mongoose model
    const User = mongoose.model('users', { name: String, email: String, comments: String });

    // POST route to handle form submission
    app.post('/submit', (req, res) => {
      const { name, email, comments } = req.body;

      // Create a new user document
      const newUser = new User({ name, email, comments });

      // Save the user data to MongoDB
      // this is a new method where we are using .save to save the newUser data instead of db.collection('users').insertOne(newUser)
      newUser.save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          res.status(500).send('Error submitting form');
        });
    });
  })

  .catch(err => {
    console.error('Connection error:', err);
  });

app.listen(3000, () => {
  console.log(`http://localhost:3000/`);
});