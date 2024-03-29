"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addColumn = exports.getColumnsByList = exports.getAllColumns = void 0;

var _shortid = _interopRequireDefault(require("shortid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//selectors
var getAllColumns = function getAllColumns(state) {
  return state.columns;
};

exports.getAllColumns = getAllColumns;

var getColumnsByList = function getColumnsByList(_ref, listId) {
  var columns = _ref.columns;
  return columns.filter(function (column) {
    return column.listId === listId;
  });
}; // action creators


exports.getColumnsByList = getColumnsByList;

var addColumn = function addColumn(payload) {
  return {
    type: 'ADD_COLUMN',
    payload: payload
  };
}; // actions


exports.addColumn = addColumn;

var createActionName = function createActionName(actionName) {
  return "app/columns/".concat(actionName);
};

var ADD_COLUMN = createActionName('ADD_COLUMN');

var columnsReducer = function columnsReducer() {
  var statePart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_COLUMN:
      return [].concat(_toConsumableArray(statePart), [_objectSpread({}, action.payload, {
        id: (0, _shortid["default"])()
      })]);

    default:
      return statePart;
  }
};

var _default = columnsReducer;
exports["default"] = _default;