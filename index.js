const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const connection = require('./database/database')
const QuestionModel = require('./database/Question')

//database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada comn sucesso')
    })
    .catch((err) => {
        console.log(err)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    QuestionModel.findAll({ raw: true, order: [
        ['id','DESC']
    ]}).then(data => {
        res.render('index', {
            questions: data
        })
    })
})
app.get('/ask', (req, res) => {
    res.render('ask')
})

app.post('/save-ask', (req, res) => {
    let title = req.body.title
    let desc = req.body.description
    QuestionModel.create({
        title: title,
        description: desc
    }).then(() => {
        res.redirect('/')
    })
})

app.get('/question/:id', (req, res) => {
    let id = req.params.id
    QuestionModel.findOne({
        where: {
            id: id
        }
    }).then( question => {
        if( question != undefined){
            res.render('question', {
                question: question
            })
        }else{
            res.redirect('/')
        }
    })
})

app.listen(port, () => {
    console.log(`Sever rodando na porta ${port}`)
})