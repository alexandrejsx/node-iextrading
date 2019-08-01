const cors = require("cors");

exports.transformResponse = (req, res, responseData = null) => {
	cors(req, res, () => {
		return res
			.status(200)
			.json(responseData);
	});
};

exports.transformError = (req, res, error = null) => {
	cors(req, res, () => {
		return res
			.status(500)
			.json(error);
	});
};
