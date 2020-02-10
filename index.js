require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', function(req, res) {
  if (req.method === 'POST')
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

//let persons = [
//  {
//    "name": "Arto Hellas",
//    "number": "040-123456",
//    "id": 1
//  },
//  {
//    "name": "Ada Lovelace",
//    "number": "39-44-5323523",
//    "id": 2
//  },
//  {
//    "name": "Dan Abramov",
//    "number": "12-43-234345",
//    "id": 3
//  },
//  {
//    "name": "Mary Poppendieck",
//    "number": "39-23-6423122",
//    "id": 4
//  }
//]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
  res.write(`<p>Phonebook has info for ${persons.length} people</p>`)
  res.write(`<p>${new Date()}</p>`)
  res.end()
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person.toJSON())
  })
})

//app.delete('/api/persons/:id', (request, response) => {
//  const id = Number(request.params.id)
//  const person = persons.find(person => person.id === id)
//  if (person) {
//    persons = persons.filter(person => person.id !== id)
//    response.status(204).end()
//  } else {
//    response.status(404).end()
//  }
//})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }

  if (body.number === undefined) {
    return response.status(400).json({ error: 'number missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})