import express from 'express'
import redisClient, { VISITS } from './redis'
import process from 'process'

const app = express()

app.get('/', (_, res) => {
	process.exit(1)
	redisClient.get(VISITS, (err, visits) => {
		if (err) res.send(err)
		res.send(`Number of visits is ${visits}`)
		redisClient.set(VISITS, parseInt(visits) + 1)
	})
})

const PORT = 8000

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})
