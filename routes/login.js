const path = require('path')

const express = require('express');
const rootDir = require('../util/path')

const router = express.Router();

router.get( '/', (req, res, next) =>{
    res.sendFile(path.join(rootDir,'views', 'loginpage.html'))
  })
  router.post('/', (req,res,next) =>{
    //   console.log('posted')
    // localStorage.setItem("username", "kk")
    res.redirect('/chat')
  })

  module.exports = router