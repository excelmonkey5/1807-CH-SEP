
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

module.exports = router
