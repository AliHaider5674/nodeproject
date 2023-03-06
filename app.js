const express = require('express')
const app = express()
const port = 3000

app.get('/s', (req, res) => {
  res.send('Hello World to this team ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
