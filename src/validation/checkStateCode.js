const stateCodes = require("../../state_code");

const checkStateCodeRun = (stateCodesValues) => {
  const existsInt = [];
  for (let str_key in stateCodesValues) {
    const currentState = stateCodesValues[str_key];
    const currentStrCode = currentState.str_code;
    const currentIntCode = currentState.int_code;
    if (str_key !== "st_" + currentStrCode) {
      throw Error(`Invalid str_code ${currentStrCode}`);
    }
    if (existsInt.includes(currentIntCode)) {
      throw Error(`Duplicate int_code ${currentIntCode}`);
    }
    existsInt.push(currentIntCode);
  }
  return true;
};

const checkStateCode = () => {
  return checkStateCodeRun(stateCodes.code);
};

module.exports = {
  checkStateCode,
};
