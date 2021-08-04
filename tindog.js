const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

app.use(express.static('public'));
// app.use(express.static('node../images'));
// app.use(serveStatic(path.join(__dirname, 'public')));
// app.use(serveStatic(path.join(__dirname, 'images')));



app.listen(3000);