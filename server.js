const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cores = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');


//app midleware
app.use(bodyParser.json());
app.use(cores());

//route midleware
app.use(postRoutes);


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