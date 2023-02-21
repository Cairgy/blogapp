const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//our schema, which defines the structure

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},  {timestamps: true});


// create a model based on the above schema

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;