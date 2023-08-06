const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3333, () => {
  console.log('Server started on port 3333')
})