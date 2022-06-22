import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import client from './database'

dotenv.config()

client

const { PORT } = process.env

const app: express.Application = express()
const address: string = `0.0.0.0:${PORT}`

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
	res.send('Hello World!')
})

app.listen(PORT, function () {
	console.log(`starting app on: ${address}`)
})
