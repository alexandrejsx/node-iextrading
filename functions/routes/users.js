const express = require("express");
const Users = require("../models/users");

const router = express.Router();

router.get("/getLatestPrice", async (req, res) => {
  try {
    //const { symbol } = req.body;

    const latestPrice = await Users.getLatestPrice();

    return res.send(latestPrice);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

module.exports = app => app.use("/users", router); //recuperando app do index e definindo middleware users
