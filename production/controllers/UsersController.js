"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _getPaginate2 = require("../libs/getPaginate");

var UsersController = {
  paginate: function () {
    var _paginate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, size, page, name, condition, _getPaginate, limit, offset, listUsers;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, size = _req$query.size, page = _req$query.page, name = _req$query.name;
              condition = name ? {
                name: {
                  $regex: new RegExp(name),
                  $options: "i"
                }
              } : {};
              _getPaginate = (0, _getPaginate2.getPaginate)(page, size), limit = _getPaginate.limit, offset = _getPaginate.offset;
              _context.next = 6;
              return _User["default"].paginate(condition, {
                offset: offset,
                limit: limit
              });

            case 6:
              listUsers = _context.sent;
              res.json({
                total: listUsers.totalDocs,
                users: listUsers.docs
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                message: _context.t0.message || 'Ups algo salió mal'
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    function paginate(_x, _x2) {
      return _paginate.apply(this, arguments);
    }

    return paginate;
  }(),
  index: function () {
    var _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var listUsers;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _User["default"].find();

            case 3:
              listUsers = _context2.sent;
              res.send(listUsers);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              res.status(500).json({
                message: _context2.t0.message || 'Ups algo salió mal'
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function index(_x3, _x4) {
      return _index.apply(this, arguments);
    }

    return index;
  }(),
  store: function () {
    var _store = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var newUser, userSave;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newUser = new _User["default"]({
                role: req.body.role ? req.body.role : false,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone
              });
              _context3.next = 3;
              return newUser.save();

            case 3:
              userSave = _context3.sent;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function store(_x5, _x6) {
      return _store.apply(this, arguments);
    }

    return store;
  }(),
  findUser: function () {
    var _findUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var id, userFound;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.next = 3;
              return _User["default"].findById(id);

            case 3:
              userFound = _context4.sent;

              if (userFound) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(404).json({
                message: "El usuario ".concat(id, " no existe")
              }));

            case 6:
              res.json(userFound);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function findUser(_x7, _x8) {
      return _findUser.apply(this, arguments);
    }

    return findUser;
  }(),
  deleteUser: function () {
    var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var userDelete;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _User["default"].findByIdAndDelete(req.params.id);

            case 2:
              userDelete = _context5.sent;
              res.json({
                message: "El usuario fue eliminado."
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function deleteUser(_x9, _x10) {
      return _deleteUser.apply(this, arguments);
    }

    return deleteUser;
  }(),
  filterUser: function () {
    var _filterUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var userFilter;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _User["default"].find({
                role: true
              });

            case 2:
              userFilter = _context6.sent;
              res.json(userFilter);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function filterUser(_x11, _x12) {
      return _filterUser.apply(this, arguments);
    }

    return filterUser;
  }(),
  updateUser: function () {
    var _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var userUpdate;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _User["default"].findOneAndUpdate(req.params.id, req.body);

            case 2:
              userUpdate = _context7.sent;
              res.json({
                message: "Usuario actualizado."
              });

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function updateUser(_x13, _x14) {
      return _updateUser.apply(this, arguments);
    }

    return updateUser;
  }()
};
var _default = UsersController;
exports["default"] = _default;