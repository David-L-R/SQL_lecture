import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import client from './database'

const app: express.Application = express()
const address: string = '0.0.0.0:3000'

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
	res.send('Hello World!')
})

console.log('clinet', client)

app.listen(3000, function () {
	console.log(`starting app on: ${address}`)
})
