const axios = require("axios");

exports.getFromIex = async (endpoint, testData = false) => {
  const base_url = testData
    ? "https://sandbox.iexapis.com"
    : "https://cloud.iexapis.com/";

  const key = testData
    ? "Tpk_34cf6607f9ac4260bb999c7748d03e68"
    : "pk_e8621e68ada14cfea8310111f1ee6774";

  return await axios.get(`${base_url}/stable${endpoint}?token=${key}`);
};
