const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'routes','index.html'));
});
app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname,'routes','about.html'));
});
app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname,'routes','contact.html'));
});
app.listen(port,()=>{
console.log(`Server is running on http://localhost:${port}`)
});