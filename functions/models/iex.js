const axios = require("axios");

exports.getFromIex = async (endpoint, testData = false) => {
  const base_url = testData
    ? "https://sandbox.iexapis.com"
    : "https://cloud.iexapis.com/";

  const key = testData
    ? "Tpk_58aaac8646404b2da5bcea7b378c52d8"
    : "pk_fec3452268284b8a901665f7d6b605bb";

  return await axios.get(`${base_url}/stable${endpoint}?token=${key}`);
};
