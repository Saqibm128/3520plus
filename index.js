var express = require('express');
var app = express();
var path = require('path')
var serveStatic = require("serve-static")

app.use(serveStatic(path.join(__dirname,"static")))
console.log(path.join(__dirname,"static"))

app.listen(3000)
