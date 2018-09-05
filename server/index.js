// Set up environment variables
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

// Set up express server
const express = require('express');

const app = express();

// Set up router
const router = require('./routes');

app
  // Parse JSON payloads
  .use(express.json())
  // Server the public files
  .use(express.static(PUBLIC_DIR))
  // Set up our routes
  .use('/gm', router)
  // Handle our errors
  // .use(errorHandler)
  // Listen to port and log
  .listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // eslint-disable-line no-console
