// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

let app = express();
const PORT = process.env.PORT || 8000;

let db = require(path.join(__dirname, '/models'));

// Serve static content for the app from the 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

// Override with POST
app.use(methodOverride('_method'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
let routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
});
