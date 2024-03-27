import express from "express";
const app = express();
import routes from "./routes/index.mjs";
import db from "./config/db.mjs";

app.listen(3001, () => {
  console.log("Server is running  on port 3001");
});

db.connection.once("open", () => {
  console.log("DB connected successfully!");
});

app.use(express.json())

app.use("/", routes);
