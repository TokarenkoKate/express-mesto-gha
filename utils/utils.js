module.exports.getValidationErrorMessages = (errObj) => {
  const errorKeysArray = Object.keys(errObj.errors);
  return errorKeysArray.map((errKey) => errObj.errors[errKey].message).join(', ');
};
