const redis = require('redis')
const { promisify } = require('util')
const { REDIS_URL } = require('../util/config')

let getAsync
let setAsync

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {
  const client = redis.createClient({
    url: REDIS_URL
  })
    
  getAsync = promisify(client.get).bind(client)
  setAsync = promisify(client.set).bind(client)    
}


const ADDED_TODOS = 'ADDED_TODOS';

const getNumberOfTodos = async () => {
  const todosNum = await getAsync(ADDED_TODOS);
  return Number(todosNum) || 0
}


module.exports = {
  getAsync,
  setAsync,
  ADDED_TODOS,
  getNumberOfTodos
}