import express from 'express'
import * as dotenv from 'dotenv'
import connect_to_api from './api/wallpapers-api.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Ani Papers Now Live at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
	connect_to_api('Naruto', req, res)
})
