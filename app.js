const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const express = require('express')


// Heroku dynamically sets a port
const PORT = process.env.PORT || 3001

app.use('/db', middlewares, router)
app.get('/health', (req, res) => {
  res.send('ok1')
})
app.use(express.static('build'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})