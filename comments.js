// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array
let comments = [
  { username: 'Alice', comment: 'I love your blog!', createdAt: new Date() },
  { username: 'Bob', comment: 'Good post', createdAt: new Date() }
];

// Create a route for getting all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});