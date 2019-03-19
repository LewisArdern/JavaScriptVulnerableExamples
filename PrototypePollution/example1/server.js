const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const merge = require('merge')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res) => res.send('challenge 2'))

app.post('/flag', (req, res) => {

  var loginStatus = {}
  loginStatus.userInfo = {};

  if (req.body.isLoggedIn) {
    res.send('nope!')
    return;
  }

  merge.recursive({}, req.body)

  if (loginStatus.isLoggedIn == "flag") {
    res.send('you did it!!!!');
  } else {
    res.send('not logged in')
  }

})

app.listen(9090, () => console.log(`Server running`))






