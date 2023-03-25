const express = require('express');
const router = express.Router();
const Movie = require('../model/movie');

router.get('/movies', async (req, res) => {
    const movie = await Movie.find();
    res.json(movie);
});

router.post('/movie/add/', async (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const movie = new Movie(req.body);

    await movie.save();

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

module.exports = router;