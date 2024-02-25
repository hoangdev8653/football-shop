const convertJoiError = (error) => {
  return error.details.map((detail) => ({
    field: detail.path.join("."),
    message: detail.message,
  }));
};

export { convertJoiError };
