const http = require('http');

const server = http.createServer((req, res) => {
  // Improved handling of request timeouts
  req.on('timeout', () => {
    console.error('Request timed out');
    res.writeHead(408, { 'Content-Type': 'text/plain' });
    res.end('Request Timeout');
  });

  // Handle potential errors during request processing
  req.on('error', (err) => {
    console.error('Request error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });

  // Simulate a delay to demonstrate the issue
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }, 5000); // 5-second delay
});

// Improved error handling for the server
server.on('error', (err) => {
  console.error('Server error:', err);
  // Consider adding more sophisticated error handling logic here, 
  // such as restarting the server or logging to a monitoring system.
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
