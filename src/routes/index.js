const express = require('express');
const router = express.Router();
const Movie = require('../model/movie');

router.get('/movies', async (req, res) => {
    const movie = await Movie.find();
    res.json(movie);
});

router.get('/movie/add/:title/:description/:dateRelease', async (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");

    const { title } = req.params;
    const { description } = req.params;
    const { dateRelease } = req.params;

    var movieJson = { title: title, description: description, dateRelease: dateRelease };

    const movie = new Movie(movieJson);

    await movie.save();

    res.send('Movie saved');
});

module.exports = router;