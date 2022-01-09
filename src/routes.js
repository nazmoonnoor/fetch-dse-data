import express from "express";
import cors from "cors";
import handler from "./handler.js";
import _ from "lodash";

const router = express.Router();

router.get("/top", cors(), (req, res) => {
  handler
    .getData()
    .then((data) => {
      var top = _.orderBy(data, ["ChangePer"], ["desc"]);
      var result = top.map(function (arr) {
        return arr.Scrip;
      });
      res.json({ message: "Request received!", result });
    })
    .catch((err) => console.log(err));
});

router.get("/bottom", cors(), (req, res) => {
  handler
    .getData()
    .then((data) => {
      var top = _.orderBy(data, ["ChangePer"], ["asc"]);
      var result = top.map(function (arr) {
        return arr.Scrip;
      });
      res.json({ message: "Request received!", result });
    })
    .catch((err) => console.log(err));
});

router.get("/latest", cors(), (req, res) => {
  handler
    .getData()
    .then((data) => {
      res.json({ message: "Request received!", data });
    })
    .catch((err) => console.log(err));
});
export default router;
