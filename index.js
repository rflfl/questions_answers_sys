const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})
app.get('/ask', (req, res) =>{
    res.render('ask')
})

app.listen(port, ()=>{
    console.log(`Sever rodando na porta ${port}`)
})