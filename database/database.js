const Sequelize = require('sequelize')
const connection = new Sequelize('questions_answers_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection