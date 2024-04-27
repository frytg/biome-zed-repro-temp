// when saving those should be sorted (express > node:path)
const path = require('node:path')
const express = require('express')

// configure express
const app = express()

// create fake endpoint with lots of mistakes
app.use((req, res, next) => {
       console.log(req.method, req.path)

  // when saving it should format all these lines to tabs
   return res.status(404).send('Not found')
})

app.listen(process.env.PORT || 8080)

// this is an unsused variable
const unused = 'unused'
const alsoUnsed = "also unused"
