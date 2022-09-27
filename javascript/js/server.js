const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Hello Cypress Discovery'})
})
app.get('/avengers', function (req, res) {
    var avangers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scot Lang']
    returnres.json({data: avengers})

})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

if (!idade) {
    return res.json({message: 'Idade é um campo obrigatório'})
   }
    
    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message: 'Ok, voce pode tirar sua CNH.'})
    } else if (idadeNum > 4) {
        return res.json({message: 'Voce é menor de idade, sugiro que ande de Bike.'})
    } else {
        return res.json({message:'Melhor voce tomar leite, kkkk. '})
    }
})

app.listen(3000) 