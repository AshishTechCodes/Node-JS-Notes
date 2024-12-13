const mongoose = require('../../node_modules/mongoose');

mongoose.connect('mongodb://localhost:27017/cars')
  .then(() => {
    console.log('Connected to MongoDB');
    
    const SportsCar = mongoose.model('SportsCars', {company: String, series: String, model: String, status: String});
    
    SportsCar.deleteOne({ "series": "A series" })
      .then(result => {
        console.log('Deleted count:', result.deletedCount);
      })
      .catch(err => {
        console.error('Error Deleting data:', err);
      });
  })
  .catch(err => {
    console.error('Connection error:', err);
  });