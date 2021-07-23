const express = require('express');
const pingRoute = express.Router();

pingRoute.get('/', function (req, res) {
    try{
        res.status(200).json({ "success": "true" });
    
      }
    catch(error){
      return res.status(400).json({error: error.toString() })
    }
  });
  
  module.exports = pingRoute;