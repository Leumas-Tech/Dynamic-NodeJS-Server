// newServer.js
const express = require('express');
const app = express();
const port = process.argv[2] || 3001; // Default to port 3001 if no argument is provided

app.get('/', (req, res) => {
  res.send('This is the new server!');
});

app.listen(port, () => {
  console.log(`New server listening at http://localhost:${port}`);
});
