const express = require('express');
var path = require('path');
const app = express();
const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
app.use(express.static(path.join(__dirname, 'content')));
var contentRouter = require('./routes/contentRouter');
app.use('/', contentRouter);