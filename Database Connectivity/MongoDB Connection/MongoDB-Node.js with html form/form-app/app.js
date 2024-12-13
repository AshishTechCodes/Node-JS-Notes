const express = require('../../../node_modules/express');
const bodyParser = require('../../../node_modules/body-parser');
const mongoose = require('../../../node_modules/mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/formDB');

// Middleware
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(express.static('public'));

// User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    comments: String
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/submit', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments
    });

    try {
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        res.send(err);
    }
});

app.listen(8090, () => {
    console.log(`http://localhost:8090`);
});