const express = require('express')
const path = require('path') // another core module of nodeJs
const rootDir = require('../utils/path')

const router = express.Router()
// This is like mini express app tied to other express app. Pluggable into other express app.

router.get('/', (req, res, next) => {
  console.log('In the home middleware')
  // res.send(
  //   '<body><form action="/admin/add-product" method="POST"><label for="fname">First name:</label><br> <input type="text" id="fname" name="fname"><br> <label for="lname">Last name:</label><br> <input type="text" id="lname" name="lname"> <br><button type="submit">Click Me!</button></br></form></body>'
  // )
  res.sendFile(path.join(rootDir, 'views', 'homepage.html'))
})

module.exports = router
