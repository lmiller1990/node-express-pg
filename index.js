const express = require('express')
const { Client } = require('pg')

const app = express()

app.get('/query', async (req, res) => {
  const client = new Client({
    user: 'lachlan',
    host: 'localhost',
    port: 5432,
    database: 'node_test'
  })
  client.connect()

  const result = await client.query('select * from users')
  await client.end()
  res.json({ data: result.rows })
})

app.get('/query-callback', (req, res) => {
  const client = new Client({
    user: 'lachlan',
    host: 'localhost',
    port: 5432,
    database: 'node_test'
  })
  client.connect()

  const result = client.query('select * from users', (err, result) => {
    if (err) {
      console.log('Error:', e)
      client.end()
      res.sendStatus(500)
    }

    res.json({ data: result.rows })
  })
})

app.listen(8080)
