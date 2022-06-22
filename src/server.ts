import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import client from './database'
import { MythicalWeaponStore } from './models/mythical_weapon'
import { monitorEventLoopDelay } from 'perf_hooks'

dotenv.config()

client

const { PORT } = process.env

const app: express.Application = express()
const address: string = `0.0.0.0:${PORT}`

app.use(bodyParser.json())

app.get('/', async function (req: Request, res: Response) {
	// res.send('Hello World!')

	try {
		const MythicalWeapon = new MythicalWeaponStore()
		const weapons = await MythicalWeapon.index()
		console.log('GET Weapons', weapons)

		const weapon = await MythicalWeapon.show(1)
		console.log('Show Weapons', weapon)

		const newWeapon = await MythicalWeapon.create({
			name: 'Sword',
			attack: 12,
			defense: 0,
		})
		console.log('new', newWeapon)

		const deleted = await MythicalWeapon.delete(6)

		console.log('amount deleted', deleted)
	} catch (err) {
		console.log('ERROR', err)
	}
})

app.listen(PORT, function () {
	console.log(`starting app on: ${address}`)
})
