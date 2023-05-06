const db = require("../db/db");

class TodoController {
  async createTodo(req, res) {
    const { title } = req.body;
    const newTodo = await db.query(
      `INSERT INTO todo (title) values ($1) RETURNING *`,
      [title]
    );
    res.json(newTodo.rows[0]);
  }
  async updateTodo(req, res) {
    const { title } = req.body;
    const { id } = req.params;
    const updateTodo = await db.query(
      `UPDATE todo set title = $1 where id = $2 RETURNING *`,
      [title, id]
    );
    res.json(updateTodo.rows[0]);
  }
  async deleteTodo(req, res) {
    const { id } = req.params;
    const todo = await db.query("DELETE FROM todo where id = $1", [id]);
    res.json(todo.command);
  }
  async getTodo(req, res) {
    const { id } = req.params;
    const todo = await db.query("SELECT * FROM todo WHERE id = $1", [id]);
    res.json(todo.rows[0]);
  }
  async getTodos(req, res) {
    const todos = await db.query("select * from todo");
    res.json(todos.rows);
  }
}

module.exports = new TodoController();
