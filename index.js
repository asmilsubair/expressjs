const express = require('express');

var boderyParser  = require('body-parser')

const app = express()

const classRoutes  = require('./routes/class-routes')

app.use(boderyParser.urlencoded({extended:false}))

app.use( boderyParser.json())

const port = 3000

app.use('/class',classRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>')
  })

  app.get('/aboutus', (req, res) => {
  res.send('About Us')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

