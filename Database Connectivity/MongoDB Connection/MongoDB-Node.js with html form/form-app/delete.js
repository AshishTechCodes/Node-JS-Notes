const express = require('../../../node_modules/express');
const mongoose = require('../../../node_modules/mongoose');
const bodyParser = require('../../../node_modules/body-parser');
const path = require('path');

const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/delete', (req, res) => {
  res.sendFile(path.join(__dirname, './public/delete.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/formDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Create a Mongoose model
    const User = mongoose.model('users', { name: String, email: String, comments: String });

    // POST route to handle delete requests
    app.post('/delete', (req, res) => {
      const { name } = req.body;

      // Find the user by name and delete their record
      User.findOneAndDelete({ name: name })
        .then(deletedUser => {
          if (deletedUser) {
            res.redirect('/delete');
          } else {
            res.status(404).send('User not found');
          }
        })
        .catch(err => {
          res.status(500).send('Error deleting user');
        });
    });
  })
  .catch(err => {
    console.error('Connection error:', err);
  });

app.listen(3000, () => {
  console.log(`http://localhost:3000/delete`);
});
