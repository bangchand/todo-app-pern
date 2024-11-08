import express from "express";
import cors from "cors";
import conn from "./Connection.ts";
import TodoRoute from "./routes/TodoRoute.ts";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

conn
  .authenticate()
  .then(() => {
    console.log("server connected success!");
  })
  .catch(() => {
    console.log("server connetion failed");
  });

app.use(TodoRoute);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
