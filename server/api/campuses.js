
const router = require('express').Router()
const {Campuses} = require('../db')

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

module.exports = router
