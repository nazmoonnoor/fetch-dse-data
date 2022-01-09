import express from "express";
import cors from "cors";
import routes from "./routes.js";

let app = express();

app.use(cors());
app.use(express.json());

const port = 8080;

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
