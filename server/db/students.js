const db = require('./database')
const Sequelize = require('sequelize')

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'x'
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      max: 4,
      min: 0
    }
  }
});



module.exports = Students
