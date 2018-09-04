
const router = require('express').Router()
const {Campuses, Students} = require('../db')

router.get('/', (req, res, next) => {
  Campuses.findAll()
  .then(campusList => {
    if (!campusList) {
      const err = Error('not found')
      err.status = 404
      throw err
    }
    console.log('campus find all')
    res.json(campusList)
  }).catch(next)})

  router.post('/', async (req, res, next) => {
    try {
      const campus = await Campuses.create(req.body);
      res.json(campus)
    } catch(err) {
      next(err);
    }
  });

  router.get('/:id', (req, res, next) => {
    Campuses.findById(req.params.id)
    .then(campus => {
      if (!campus) {
        const error = Error('not found')
        err.status = 404
        throw err
      }
      console.log('student find one')
      res.json(campus)
    }).catch(next)})

  router.delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      console.log("id", id)
      await Campuses.destroy({where: {id} });
      res.status(204).end();
    } catch(err) {
      next(err)
    }
  })

  router.get('/studentsenrolled/:id', (req, res, next) => {
      Students.findAll( {
        where: {
          campusId: req.params.id
        }
        })
      .then(studentsenrolled => {
        if (!studentsenrolled) {
          const error = Error('not found')
          err.status = 404
          throw err
        }
        console.log('student enrolled')
        res.json(studentsenrolled)
      }).catch(next)})


module.exports = router
