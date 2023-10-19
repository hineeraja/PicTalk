require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const db = require('./config/connection')
const routes = require('./routes')

const cwd = process.cwd()
const corsOptions = {
  origin: "http://localhost:3002"
}

const PORT = process.env.PORT || 3001
const app = express()

app.unsubscribe(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`)
  })
})