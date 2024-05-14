'use strict';

// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a simple GET endpoint at /hello that responds with "Hello World!"
app.get('/hello', function (req, res) {
  res.type('text').send('Hello World!');
});

// Define a GET endpoint to calculate circle measurements
app.get('/math/circle/:r', function (req, res) {
  const radius = req.params.r;
  if (!radius || isNaN(radius)) {
    return res.type('json').status(400).send({ error: 'Error, Bad Request!' });
  }
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  res.json({
    area: area,
    circumference: circumference
  });
});

// Define a GET endpoint for a personalized greeting
app.get('/hello/name', function (req, res) {
  const firstName = req.query.first;
  const lastName = req.query.last;
  if (!firstName || !lastName) {
    res.type('text').status(400).send('Error, Bad Request!');
  } else {
    res.type('text').send(`Hello ${firstName} ${lastName}`);
  }
});

// Set the port number
const PORT = process.env.PORT || 8000;

// Start listening on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
