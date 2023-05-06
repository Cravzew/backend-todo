const express = require("express");
const todoRouter = require("./src/routes/todo.routes");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/api", todoRouter);

app.use(express.static("public"));

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started. Go to http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
}

startApp();
