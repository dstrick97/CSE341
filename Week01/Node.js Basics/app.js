const http = require('http'); //use ./ for a local .js file. sans ./, it searches for a global file

const routes = require('./routes');
// function rqListener(req, res) { // optional to explicity create function

// }

//http.createServer(rqListener);

//another way to create server
// http.createServer(function(req,res){ //annonymous function

// });
//equivalent to 
const server = http.createServer(routes.handler);

server.listen(3000);