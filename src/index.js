import express from "express";
import cors from "cors";
import handler from "./handler.js";

let app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

app.get("/", cors(), (req, res) => {
  handler
    .getData()
    .then((data) => {
      res.json({ message: "Request received!", data });
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
