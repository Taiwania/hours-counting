// Dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Express
const express = require('express')
const app = express()

// Import and set up handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('The server is running on port', process.env.PORT)
})