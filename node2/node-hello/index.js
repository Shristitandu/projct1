// const http = require('http');
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   const msg = 'Hello Node!\n'
//   res.end(msg);
// });

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });
// Import the http module
const http = require('http');

// Define the port number
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Send a response with "Hello World"
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
