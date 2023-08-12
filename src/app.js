import express from 'express'
import 'dotenv/config'
import router from './routes/index.js'
import cors from "cors"
import helmet from "helmet";

const app = express()

app.use(cors())
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello World! 🪄</h1>')
})

app.use('/api/v1', router)

app.use((_req, res) => {
  res.send('<h1>Route not  found ❌</h1>')
})

export default app