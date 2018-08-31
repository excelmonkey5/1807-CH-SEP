
const router = require('express').Router()
const {Students} = require('../db')

router.get('/', (req, res, next) => {
  Students.findAll()
  .then(studentList => {
    if (!studentList) {
      const err = Error('not found')
      err.status = 404
      throw err
    }
    res.send(studentList)
  }).catch(next)})

  router.post('/', async(req, res, next) => {
    try {
      const student = await Students.create(req.body);
      res.json(student)
    }
    catch (err) {
      next(err);
    }
  })

  router.get('/:id', (req, res, next) => {
    Students.findById(req.params.id)
    .then(student => {
      if (!student) {
        const error = Error('not found')
        err.status = 404
        throw err
      }
      res.json(student)
    }).catch(next)})

  router.delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      await Students.destroy({where: {id} });
      res.status(204).end()
    } catch(err) {
      next(err)
    }
  })

module.exports = router
