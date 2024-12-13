const mongoose = require('../../node_modules/mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cars')
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Create a model based on the schema
    const SportsCar = mongoose.model('SportsCars', {company: String,series: String,model: String});
    
    // Insert multiple documents
    SportsCar.insertMany([
        { company: 'Mercedes', series: 'Black Series', model: 'SLS AMG' },
        { company: 'Audi', series: 'A series', model: 'A8' }
      ])
      .then(result => {
        console.log('Inserted count:', result.length);
      })
      .catch(err => {
        console.error('Error inserting data:', err);    
      });
  })
  .catch(err => {
    console.error('Connection error:', err);
  });