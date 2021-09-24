//const http = require('http'); // no longer needed because of app.listen()

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',(req, res, next) => {
    //console.log('This always runs!');
    next();
});

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: 'test'});
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // does the same thing as creating a server