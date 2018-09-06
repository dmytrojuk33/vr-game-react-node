import express from 'express';
import path from 'path';
import gmRouter from './routesGM';

const PORT = process.env.PORT || 3001;
const PUBLIC_DIR = path.join(__dirname, '../public');
const app = express();

app
  // Parse JSON payloads
  .use(express.json())
  // Serve the public files
  .use(express.static(PUBLIC_DIR))
  // Set up our routes
  .use('/gm', gmRouter)
  // Handle our errors
  // .use(errorHandler)
  // Listen to port and log
  .listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // eslint-disable-line no-console
