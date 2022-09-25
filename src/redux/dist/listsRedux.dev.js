"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addList = exports.getAllLists = exports.getListById = void 0;

var _shortid = _interopRequireDefault(require("shortid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// selectors
var getListById = function getListById(_ref, listId) {
  var lists = _ref.lists;
  return lists.find(function (list) {
    return list.id === listId;
  });
};

exports.getListById = getListById;

var getAllLists = function getAllLists(_ref2) {
  var lists = _ref2.lists;
  return lists;
}; // actions


exports.getAllLists = getAllLists;

var createActionName = function createActionName(actionName) {
  return "app/lists/".concat(actionName);
};

var ADD_LIST = createActionName('ADD_LIST'); // action creators

var addList = function addList(payload) {
  return {
    type: ADD_LIST,
    payload: payload
  };
};

exports.addList = addList;

var listsReducer = function listsReducer() {
  var statePart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_LIST:
      return [].concat(_toConsumableArray(statePart), [_objectSpread({}, action.payload, {
        id: (0, _shortid["default"])()
      })]);

    default:
      return statePart;
  }

  ;
};

var _default = listsReducer;
exports["default"] = _default;