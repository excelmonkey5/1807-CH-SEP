
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
    console.log('student find all')
    res.send(studentList)
  }).catch(next)})

  router.get('/:id', (req, res, next) => {
    Students.findById(req.params.id)
    .then(student => {
      if (!student) {
        const error = Error('not found')
        err.status = 404
        throw err
      }
      console.log('student find one')
      res.json(student)
    }).catch(next)})

module.exports = router
