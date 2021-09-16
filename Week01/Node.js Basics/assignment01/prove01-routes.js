let userInput = [];
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><h1>Welcome!</h1><h3>Enter a Username</h3><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
      }
      if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li>');
        if (userInput.length){
          userInput.forEach(element => {
            res.write(`<li>${element}</li>`);
          });
        }

        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
      }

      if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          let name = parsedBody.split('=')[1]
          console.log(name); // username=whatever-the-user-entered
          userInput.push(name);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      }
};

//module.exports = requestHandler; // allows the request handler function to be imported in other files

// allows different things to be exported
module.exports = {
    handler: requestHandler,
};