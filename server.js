var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var apiRouter = require('./routes/router');

app.use('/api',apiRouter);
app.listen(port, function() {
  console.log('listening on port',port);
});
