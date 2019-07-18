const express = require('express')

const { dbMiddleware } = require('./dbMiddleware')

const app = express()

app.use(dbMiddleware)

app.get('/query-using-middleware', (req, res) => {
  req.client.query('select * from users', (err, result) => {
    if (err) {
      console.log('Error:', e)
      res.sendStatus(500)
    }

    res.json({ data: result.rows })
  })
})

app.listen(8080)
