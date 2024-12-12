const express = require('../../node_modules/express');
const bodyParser = require('../../node_modules/body-parser');
const mongoose = require('../../node_modules/mongoose');
const path = require('../../node_modules/path');
const app = express();

mongoose.connect('mongodb://localhost:27017/Ashish', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    age: Number,
    address: String,
    dateofjoining: String,
    message: String
});

const User = mongoose.model('students', userSchema);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        address: req.body.address,
        dateofjoining: req.body.dateofjoining,
        message: req.body.message
    });

    try {
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        res.send(err);
    }
});


app.listen(8090, () => {
    console.log('Server is running on http://localhost:8090/');
});