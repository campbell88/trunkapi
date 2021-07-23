
const express = require('express');
const getPostsRoute = express.Router();
const url = require('url');
const querystring = require('querystring');
const request = require('request');

getPostsRoute.get('/', function (req, res) {
  try{
    let tag = req.query.tag;
    let sortBy = req.query.sortBy;
    if (tag){
      request.get({
        url: sortBy ? `https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}` :
             `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`,
        headers: {
            "content-type": "application/json"
        }
      }, ( error, response, body) => {
            const posts = JSON.parse(body)
          res.send(posts)
      });
    }
    else{
      res.status(400).json({"error": "Tags parameter is required"});
    }
  }
  catch(error){
    return res.status(400).json({error: error.toString() })
  }
});


module.exports = getPostsRoute;
