const mongoose = require('../../node_modules/mongoose');

mongoose.connect('mongodb://localhost:27017/cars', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});