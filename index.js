// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 8000

let app = express()

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'))

app.use(bodyParser.urlencoded({ extended: false }))

// Override with POST
app.use(methodOverride('_method'))

// Set Handlebars as the view engine
let exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Import routes and give the server access to them
let routes = require('./controllers/burgers_controller.js')

app.use('/', routes)

app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT)
})
