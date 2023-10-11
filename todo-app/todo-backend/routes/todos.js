const express = require('express');
const { Todo } = require('../mongo');
const { getNumberOfTodos, ADDED_TODOS, setAsync } = require('../redis');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  console.log('find all is running')
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  const todosCount = await getNumberOfTodos()
  await setAsync(ADDED_TODOS, todosCount + 1)

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  console.log(req.todo)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()

  const todosCount = await getNumberOfTodos();
  await setAsync(ADDED_TODOS, todosCount - 1);
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const updatedTodo = await Todo.findOneAndUpdate({
    _id: req.todo._id}, req.body, {new: true, useFindAndModify: false}
  );

  // Return the updated todo item
  res.json(updatedTodo);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
