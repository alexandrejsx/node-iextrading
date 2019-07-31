const express = require("express");
const General = require("../models/general");
const cors = require("cors");

const router = express.Router();

router.post("/getDataBySymbol", async (req, res) => {
  try {
    const { symbol } = req.body;

    const latestPrice = await General.getLatestPrice(symbol);

    const companyInfo = await General.getCompanyInfo(symbol);

    const companyLogo = await General.getCompanyLogo(symbol);

    const chartDataDays = await General.getChartData(symbol, "5d");

    const chartDataMonth = await General.getChartData(symbol, "1m");

    const responseData = {
      companyInfo,
      latestPrice,
      companyLogo,
      chartDataDays,
      chartDataMonth
    };

    return res.send(responseData);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

router.get("/getTodayEarnings", async (req, res) => {
  try {
    const todayEarnings = await General.getTodayEarnings();

    const responseData = {
      todayEarnings
    };

    return res.send(responseData);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

module.exports = app => app.use("/general", router);
