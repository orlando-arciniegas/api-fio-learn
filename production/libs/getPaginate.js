"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginate = void 0;

var getPaginate = function getPaginate(page, size) {
  var limit = size ? +size : 3;
  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  };
};

exports.getPaginate = getPaginate;