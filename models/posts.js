const mongoose = require('module');

const postSchema = new mongoose.Schema({

    topic:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    postCategory:{
        type:String,
        require:true
    },

});

module.exports = mongoose.model('Posts', postSchema)


//Comment