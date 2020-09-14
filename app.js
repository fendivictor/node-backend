//Libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var hbs = require('express-handlebars');

//server configuration
var port = 6200;

// Connection to DB
mongoose.connect('mongodb+srv://fendivictor:o1wPXkDYDW93cfrK@clusterdb.1jykb.mongodb.net/mongodb?retryWrites=true&w=majority', 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

// Routes and Backend Funcioncalities
var todoListRoutes = require('./src/routes/todoListRoutes');
var tripRoutes = require('./src/routes/tripRoutes');
var adminRoutes = require('./src/routes/adminRoutes');
var itemRoutes = require('./src/routes/itemRoutes');
var ovoRoutes = require('./src/routes/ovoid');

// App Instance
var app = express();
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/todo', todoListRoutes);
app.use('/trip', tripRoutes);
app.use('/admin', adminRoutes);
app.use('/item', itemRoutes);
app.use('/ovo', ovoRoutes);

// Execute App
app.listen(port, () => {
  console.log('TodoList Backend running on Port: ',port);
});