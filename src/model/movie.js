const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = Schema({
    title: String,
    description: String,
    dateRelease: Date
});

module.exports = mongoose.model('movie', MovieSchema);