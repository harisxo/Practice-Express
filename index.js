// Initializing Route Paths:
const express = require('express');
const logger = require('./middleware/logger');
const path = require('path');
const app = express();

// Body Parser Middleware:

app.use(express.json());
app.use(express.urlencoded({extended: false}));

 // Set static folder:
app.use(express.static(path.join(__dirname, 'public')));

// Members api routes:
app.use('/api/members', require('./routes/api/members'));

// Initializing port:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));







