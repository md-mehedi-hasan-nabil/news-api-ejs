const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 8000 || process.env.PORT;

//static files
app.use(express.static(__dirname + 'public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

//templates engine 
app.set('views', './src/views/partials');
app.set('view engine', 'ejs');

//Routes handler
const newsRoute = require('./src/routes/news');
app.use('/', newsRoute);

// bodyParser and cors
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

//listen on port
app.listen(port, () => {
    console.log(`Server is running...`);
});
