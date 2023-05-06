const Router = require("express");
const TodoController = require("../controller/todo.controller");
const router = new Router();

router.post("/todo", TodoController.createTodo);
router.delete("/todo/:id", TodoController.deleteTodo);
router.put("/todo/:id", TodoController.updateTodo);
router.get("/todo/:id", TodoController.getTodo);
router.get("/todo", TodoController.getTodos);

module.exports = router;
