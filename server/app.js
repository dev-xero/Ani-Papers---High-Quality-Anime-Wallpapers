import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connect_to_api from './api/wallpapers-api.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.listen(PORT, () => {
  console.log(`Ani Papers Now Live at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  const { query } = req.query
  if (query) {
    console.log(query)
  }
  res.json({ msg: 'Welcome to the api' })
})

app.get('/api', (req, res) => {
  const { query } = req.query
  if (query) {
    connect_to_api(query, req, res)
  }
})
