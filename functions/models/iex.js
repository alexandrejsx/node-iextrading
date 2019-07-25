const axios = require("axios");

exports.getFromIex = async endpoint => {
  return await axios.get(
    `https://cloud.iexapis.com/stable/${endpoint}?token=pk_e8621e68ada14cfea8310111f1ee6774`
  );
};
