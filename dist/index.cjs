'use strict';

const vue = require('vue');

// @__NO_SIDE_EFFECTS__
function useToNumber(value, options = {}) {
  const {
    method = "parseFloat",
    radix,
    nanToZero
  } = options;
  return vue.computed(() => {
    let resolved = vue.toValue(value);
    if (typeof method === "function")
      resolved = method(resolved);
    else if (typeof resolved === "string")
      resolved = Number[method](resolved, radix);
    if (nanToZero && Number.isNaN(resolved))
      resolved = 0;
    return resolved;
  });
}

exports.useToNumber = useToNumber;
