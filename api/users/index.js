const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT
const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('server ready')
})

app.listen(port, err => {
  if (err) {
    console.log('error ', err.stack)
    process.exit(0)
  }
})
