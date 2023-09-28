import express from "express";
import cors from "cors";
import { data } from "./data.js";
import { PORT } from "./config.js";

const app = express();
const port = PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    data: data,
    status: 200,
    message: "All data",
  });
});

app.use((req, res) => {
  res.json({
    data: null,
    status: 400,
    message: "Page not found",
  });
});

app.listen(port, () => {
  console.log(`Server running at por ${port}`);
});
