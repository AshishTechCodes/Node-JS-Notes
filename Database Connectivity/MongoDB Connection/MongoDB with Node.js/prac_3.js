const mongoose = require('../../node_modules/mongoose');

mongoose.connect('mongodb://localhost:27017/cars')
  .then(() => {
    console.log('Connected to MongoDB');
    
    const SportsCar = mongoose.model('SportsCars', {company: String, series: String, model: String, status: String});
    
    // Update multiple documents
    SportsCar.updateMany(
      { 
        "company": { "$in": ["Mercedes", "Audi"] }
      },
      { "$set": { "status": "sold" } }
    )
    .then(result => {
      console.log('Matched count:', result.matchedCount);
      console.log('Modified count:', result.modifiedCount);
    })
    .catch(err => {
      console.error('Error updating data:', err);
    });
  })
  .catch(err => {
    console.error('Connection error:', err);
  });