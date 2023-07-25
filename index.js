const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const connection = require('./database/database')
const QuestionModel = require('./database/Question')

//database
connection
.authenticate()
.then(()=>{
    console.log('Conexão realizada comn sucesso')
})
.catch((err)=>{
    console.log(err)
})

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.render('index')
})
app.get('/ask', (req, res) =>{
    res.render('ask')
})

app.post('/save-ask', (req, res) => {
    let title = req.body.title
    let desc = req.body.description
    res.send('form'+ title + ' - ' + desc)
})

app.listen(port, ()=>{
    console.log(`Sever rodando na porta ${port}`)
})