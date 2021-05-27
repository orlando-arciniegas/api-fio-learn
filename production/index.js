"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(_app["default"].get("port"), function () {
  console.log("\x1b[34m", "Server on port: http://localhost:".concat(_app["default"].get("port")));
});