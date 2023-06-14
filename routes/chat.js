const path = require('path')
const express = require('express');
// const bodyParser = require('body-parser')
const fs = require('fs')
const rootDir = require('../util/path')

const router = express.Router();

router.get( '/chat', (req, res, next) =>{
    const htmlfilepath = path.join(rootDir, 'views', 'chat.html')
    const htmlcontent = fs.readFileSync(htmlfilepath, 'utf8')

    const filecontentpath = path.join('message.txt')
    if(!fs.existsSync(filecontentpath)){
        return res.send(`<h3>Chats doesn't exist !</h3><hr>${htmlcontent}`)
    };
    const fileContent = fs.readFileSync(filecontentpath, 'utf8')
    res.send(`${fileContent}<hr>${htmlcontent}`)
  })
  router.post('/chat' , (req,res,next) =>{
    //   console.log('chat is sent')
    var data = `${JSON.stringify(req.body.username)}:  ${JSON.stringify(req.body.chatting)}`
    
    fs.appendFile('message.txt', data + '\n', (err) =>{
        if(err) throw err;
        // console.log('chat message appended')
    })
    // console.log(data)
    console.log(data) 
      res.redirect('/chat')
  })

  module.exports = router