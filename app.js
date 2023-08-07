// Dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Express
const express = require('express')
const app = express()

// Import the patches
const teamup = require('./middleware/teamup')

// Import and set up handlebars
const exphbs = require('express-handlebars')
const teamupMiddleware = require('./middleware/teamup')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(teamupMiddleware)

// Routes
app.get('/', (req, res) => {
  res.render('index')
})

// Check api data
app.get('/teamup-data', (req, res) => {
  res.json(req.teamupData.events)
})

// Listener
app.listen(process.env.PORT, () => {
  console.log('The server is running on port', process.env.PORT)
})