const express = require("express");
const Users = require("../models/users");

const router = express.Router();

router.post("/getDataBySymbol", async (req, res) => {
  try {
    const { symbol } = req.body;

    const latestPrice = await Users.getLatestPrice(symbol);

    const companyInfo = await Users.getCompanyInfo(symbol);

    const companyLogo = await Users.getCompanyLogo(symbol);

    const responseData = { companyInfo, latestPrice, companyLogo };

    return res.send(responseData);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

module.exports = app => app.use("/users", router); //recuperando app do index e definindo middleware users
