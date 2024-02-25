const { StatusCodes } = require("http-status-codes");

function handleErrors(err, req, res, next) {
  if (err.name === "ValidationError") {
    const errorMessage = err.details.map((detail) => detail.message).join(", ");
    res.status(StatusCodes.BAD_REQUEST).json({ error: errorMessage });
  } else {
    next(err);
  }
}

export default handleErrors;
