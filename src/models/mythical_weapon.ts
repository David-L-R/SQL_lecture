import Client from '../database'

export interface Weapon {
	id: Number
	name: string
	attack: Number
	defense: Number
}

export class MythicalWeaponStore {
	async index(): Promise<Weapon[]> {
		try {
			const connect = await Client.connect()
			const sql = 'SELECT * FROM mythical_weapons'
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (err) {
			throw new Error(`Cannot get weapons ${err}`)
		}
	}

	async show(id: number): Promise<Weapon> {
		try {
			const connect = await Client.connect()
			const sql = `SELECT * FROM mythical_weapons WHERE id=${id}`
			const result = await connect.query(sql)
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`Cannot get weapon with id: ${id}. Error: ${err}`)
		}
	}

	async create({ name, attack, defense }: { name: string; attack: Number; defense: Number }): Promise<Weapon[]> {
		try {
			const connect = await Client.connect()
			const sql = `INSERT INTO mythical_weapons (name, attack, defense) VALUES ('${name}', ${attack}, ${defense}) RETURNING *`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (err) {
			throw new Error(`Cannot get weapon with name: ${name}. Error: ${err}`)
		}
	}

	async update(col: string, updatedValue: string | number): Promise<Weapon> {
		try {
			const connect = await Client.connect()
			const sql = `UPDATE mythical_weapons SET ${col}=${updatedValue}`
			const result = await connect.query(sql)
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`Cannot update weapon's col: ${col}. Error: ${err}`)
		}
	}

	async delete(id: number): Promise<number> {
		try {
			const connect = await Client.connect()
			const sql = `DELETE FROM mythical_weapons WHERE id=${id}`
			const result = await connect.query(sql)
			connect.release()
			return result.rowCount
		} catch (err) {
			throw new Error(`Cannot delete weapon with id: ${id}. Error: ${err}`)
		}
	}
}
