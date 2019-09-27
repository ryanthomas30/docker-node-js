import redis from 'redis'

export const VISITS = 'visits'

const client = redis.createClient({
	host: 'redis-server',
	port: 6379,
})

client.set(VISITS, 0)

export default client
