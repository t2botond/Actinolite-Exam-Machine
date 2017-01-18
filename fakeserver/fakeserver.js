'use strict';

var bodyParser = require('body-parser')
var express = require('express');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.json());

// need path
///app.use(express.static('../????'));

///
// app.post('/user', function(req, res) {
//
// });
var port = process.env.PORT || 5000;
app.listen(5000);
