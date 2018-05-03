const express = require('express')
const app = express()

app.use(require('./authen'));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})


