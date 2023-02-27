module.exports.getValidationErrorMessages = (errObj) => {
  let errorKeysArray = Object.keys(errObj.errors);
  return errorKeysArray.map((errKey) => errObj.errors[errKey].message);
};