const express = require('express');
const mongoose = require('mongoose');

const app = express();


const PORT = 8000;
const DB_URL = 'mongodb+srv://ArunaAP:aruna@mernapp.fwe9yfv.mongodb.net/?retryWrites=true&w=majority';


//connect databse
mongoose.connect(DB_URL)
.then(() =>{
    console.log('MongoDB Connected.!');
})
.catch((err)  => console.log('DB Connection error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});