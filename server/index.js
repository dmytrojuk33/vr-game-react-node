require('dotenv').config();
const PORT = process.env.PORT || 3001;
const path = require('path');
const PUBLIC_DIR = path.join(__dirname, '../public');

const app = require('express')();

app
  // Parse JSON payloads
  .use(express.json())
  // Server public files
  .use(express.static(PUBLIC_DIR))
  // 
  .use('/gm', routes)
  // Error handling
  // .use(errorHandler)
  .listen(PORT, () => console.log(`Server listening on port ${PORT}`));
