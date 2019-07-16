const axios = require("axios");

//const { database } = require("../database");

exports.getLatestPrice = async () => {
  try {
    const { data } = await axios.get("https://api.iextrading.com/1.0/tops?symbols=SNAP");

    return {
      data: data,
      success: true,
      message: "Ações encontrados com sucesso!"
    };
  } catch (error) {
    return {
      data: error,
      success: false,
      message: "Erro ao encontrar últimas ações!"
    };
  }
};
