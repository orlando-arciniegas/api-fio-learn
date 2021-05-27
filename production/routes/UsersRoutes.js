"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));

var router = (0, _express.Router)();
router.get('/', _UsersController["default"].index);
router.get('/paginate', _UsersController["default"].paginate);
router.post('/', _UsersController["default"].store);
router.get('/filter', _UsersController["default"].filterUser);
router.get('/:id', _UsersController["default"].findUser);
router.put('/:id', _UsersController["default"].updateUser);
router["delete"]('/:id', _UsersController["default"].deleteUser);
var _default = router;
exports["default"] = _default;