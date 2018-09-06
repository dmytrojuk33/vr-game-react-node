import express from 'express';
import path from 'path';
import gmRouter from './routesGM';

const PUBLIC_DIR = path.join(__dirname, '../public');
const ERROR_PAGE = path.join(__dirname, '../public/error.html');
const app = express();

app
  // Parse JSON payloads
  .use(express.json())
  // Serve the public files
  .use(express.static(PUBLIC_DIR))
  // Set up our routes
  .use('/gm', gmRouter)
  // Handle our errors
  .use('*', express.static(ERROR_PAGE));

export default app;
