let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
    name: String,
    creator: String,
    released: String,
    description: String,
    status: String
},
{
    collection: 'survey'
});

module.exports = mongoose.model('Game', surveyModel);