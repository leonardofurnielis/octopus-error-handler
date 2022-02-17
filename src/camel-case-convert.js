/*
 * node-error-handler
 * Copyright 2019-2022 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const camelCase = require('camelcase');

/**
 * Convert object keys dash/dot/underscore/space separated string to camelCase.
 * @param {Object} obj - Object to be converted in camelCase format.
 * @return {Object} - Converted object.
 */
module.exports = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[camelCase(key)] = obj[key];

    if (camelCase(key) !== key) {
      delete obj[key];
    }
  });

  return obj;
};
