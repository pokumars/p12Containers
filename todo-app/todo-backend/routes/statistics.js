const redis = require('../redis/index');
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const todosNum = await redis.getNumberOfTodos();

  res.send({ added_todos: todosNum });
})

module.exports = router