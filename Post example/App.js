const express = require('express');
const app = express();
const port = 3000;

//Middleware to parse JSON data from the request body.
app.use(express.json());

//define the post endpoint
app.post('/submit',(req,res)=>{
const data = req.body;
console.log('Recived Data: ',data);

//Response with successfull message and recived data.
res.status(200).json({
    message: 'Data Recived Successfully',
    receivedData: data
});
});
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});