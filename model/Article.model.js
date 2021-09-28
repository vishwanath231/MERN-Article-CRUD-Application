const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Please enter the title!']
    },
    author:{
        type: String,
        required: [true, 'Please enter the author name!']
    },
    image: {
        type: String,
        required: [true, 'Please upload article image!']
    },
    article:{
        type: String,
        required: [true, 'Please enter the article!']
    },
    cloudinary_id:{
        type: String
    },
    isPosted:{
        type: Date,
        default: new Date
    }
});

const article = mongoose.model('article', ArticleSchema);

module.exports = article;