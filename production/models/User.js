"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var User = new _mongoose.Schema({
  role: {
    type: Boolean,
    "default": false
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
User.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)('User', User);

exports["default"] = _default;