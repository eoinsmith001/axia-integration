var express = require('express');

var apiRouter = express.Router();

apiRouter.route('/')
  .get(function(req,res) {
    res.status(200).json({
      success: true,
      message: "welcome"
    });
  });

apiRouter.route('/pay')
  .post(function(req,res) {
    res.status(201).json({
      success: true,
      message: "you paid"
    });
  });

module.exports = apiRouter;
