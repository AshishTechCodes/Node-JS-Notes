const express = require('../../../node_modules/express');
const mongoose = require('../../../node_modules/mongoose');
const bodyParser = require('../../../node_modules/body-parser');
const path = require('path');

const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/update', (req, res) => {
  res.sendFile(path.join(__dirname, './public/update.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/formDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Create a Mongoose model
    const User = mongoose.model('users', { name: String, email: String, comments: String });

    // POST route to handle update requests
    app.post('/update', (req, res) => {
      const { currentName, newName, email, comments } = req.body;

      // Find the user by the current name and update their information
      User.findOneAndUpdate(
        { name: currentName }, // Search for the user by current name
        { name: newName, email, comments }, // Update the name, email, and comments
        { new: true } // Return the updated document
      )
        .then(updatedUser => {
          if (updatedUser) {
            res.redirect('/update');
          } else {
            res.status(404).send('User not found in database');
          }
        })
        .catch(err => {
          res.status(500).send('Error updating user');
        });
    });
  })

  .catch(err => {
    console.error('Connection error:', err);
  });

app.listen(3000, () => {
  console.log(`http://localhost:3000/update`);
});