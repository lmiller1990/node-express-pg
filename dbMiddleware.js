const { Client } = require('pg')

const dbMiddleware = (req, res, next) => {
  res.on('finish', () => {
    if (req.client) {
      console.log('[DEBUG]: Closing db connection')
      req.client.end()
    }
  })

  res.on('error', () => {
    console.log('[DEBUG]: Error occurred, closing db connection')

    if (req.client) {
      req.client.end()
    }
  })

  try {
    console.log('[DEBUG]: Creating db connection')
    const client = new Client({
      user: 'lachlan',
      host: 'localhost',
      port: 5432,
      database: 'node_test'
    })
    client.connect()
    req.client = client
    next()
  } catch (e) {
    console.log('Error:', e)
  } 
}

module.exports = {
  dbMiddleware
}
