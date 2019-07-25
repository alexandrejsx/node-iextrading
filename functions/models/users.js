const { getFromIex } = require("./iex");

exports.getLatestPrice = async symbol => {
  try {
    const { data } = await getFromIex(`/stock/${symbol}/quote`);

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

exports.getCompanyInfo = async symbol => {
  try {
    const { data } = await getFromIex(`/stock/${symbol}/company`);

    return {
      data: data,
      success: true,
      message: "Empresa encontrada com sucesso!"
    };
  } catch (error) {
    return {
      data: error,
      success: false,
      message: "Erro ao encontrar empresa!"
    };
  }
};

exports.getCompanyLogo = async symbol => {
  try {
    const { data } = await getFromIex(`/stock/${symbol}/logo`);

    return {
      data: data,
      success: true,
      message: "Logo encontrada com sucesso!"
    };
  } catch (error) {
    return {
      data: error,
      success: false,
      message: "Erro ao encontrar logo!"
    };
  }
};
