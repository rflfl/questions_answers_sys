const Sequelize = require('sequelize')
const connection = require('./database')

const Answer = connection.define('answer',{
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    question_id: {
        type:Sequelize.INTEGER,
        allowNull: false
    }
})

Answer.sync({force: false})

module.exports = Answer