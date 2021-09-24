const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

//admin/add-product => GET
router.get('/add-product',(req, res, next) =>{ //works with all middleware requests
    //console.log('In a middleware');
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product',{pageTitle: "Add Product", path: '/admin/add-product'});
});
//Notice that they get and post have the same route. It's fine because they are differentiated by get and post
//admin/add-product => POST
router.post('/add-product', (req, res, next) => { //app.post or app.get limits the middleware to only trigger if the path is correct and the request is POST or GET
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
