import express from "express";
import cors from "cors";
import db from "./MongoConnection.js";
import todoRoutes from "./Routes/Todo.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
