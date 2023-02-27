module.exports.getValidationErrorMessages = (errObj) => {
  if (!errObj) {
    return;
  }
  const errorKeysArray = Object.keys(errObj.errors);
  return errorKeysArray.map((errKey) => errObj.errors[errKey].message).join(', ');
};
