const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  const promise = Movie.aggregate([
    {
      $lookup: {
        from: 'directors',
        localField: 'director_id',
        foreignField: '_id',
        as: 'director',
      }
    },
    {
      $unwind: {
        path: '$director',
      }
    }
  ]);
  promise.then((data) => {
    if (!data)
      next({ message: 'The movie was not fount' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

router.get('/top10', (req, res) => {
  const promise = Movie.find({}).limit(10).sort({ imdb: -1 });
  promise.then((data) => {
    if (!data)
      next({ message: 'The movie was not fount' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

router.get('/:movieId', (req, res, next) => {
  const promise = Movie.findById(req.params.movieId);
  promise.then((data) => {
    if (!data)
      next({ message: 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.put('/:movieId', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true });
  promise.then((data) => {
    if (!data)
      next({ message: 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});
router.delete('/:movieId', (req, res, next) => {
  const promise = Movie.findByIdAndDelete(req.params.movieId);
  promise.then((data) => {
    if (!data)
      next({ message: 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res) => {

  const movie = new Movie(req.body);
  const promise = movie.save();

  promise.then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/between/:start/:end', (req, res, next) => {
  const { start, end } = req.params;
  const promise = Movie.find({
    year: { "$gte": parseInt(start), "$lte": parseInt(end) }
  });
  promise.then((data) => {
    if (!data)
      next({ message: 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
