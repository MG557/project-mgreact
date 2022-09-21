"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addList = exports.addSearchForm = exports.addCard = exports.addColumn = exports.getAllLists = exports.getColumnsByList = exports.getListById = exports.getAllColumns = exports.getFilteredCards = void 0;

var _redux = require("redux");

var _initialState = _interopRequireDefault(require("./initialState"));

var _shortid = _interopRequireDefault(require("shortid"));

var _strContains = require("../utils/strContains");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//selectors

/*export const getFilteredCards = (state, columnId) => state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));
*/

/*export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));
*/
var getFilteredCards = function getFilteredCards(_ref, columnId) {
  var cards = _ref.cards,
      searchString = _ref.searchString;
  return cards.filter(function (card) {
    return card.columnId === columnId && (0, _strContains.strContains)(card.title, searchString);
  });
};

exports.getFilteredCards = getFilteredCards;

var getAllColumns = function getAllColumns(state) {
  return state.columns;
};

exports.getAllColumns = getAllColumns;

var getListById = function getListById(_ref2, listId) {
  var lists = _ref2.lists;
  return lists.find(function (list) {
    return list.id === listId;
  });
};

exports.getListById = getListById;

var getColumnsByList = function getColumnsByList(_ref3, listId) {
  var columns = _ref3.columns;
  return columns.filter(function (column) {
    return column.listId === listId;
  });
};

exports.getColumnsByList = getColumnsByList;

var getAllLists = function getAllLists(state) {
  return state.lists;
}; // action creators


exports.getAllLists = getAllLists;

var addColumn = function addColumn(payload) {
  return {
    type: 'ADD_COLUMN',
    payload: payload
  };
};

exports.addColumn = addColumn;

var addCard = function addCard(payload) {
  return {
    type: 'ADD_CARD',
    payload: payload
  };
};

exports.addCard = addCard;

var addSearchForm = function addSearchForm(payload) {
  return {
    type: 'UPDATE_SEARCHSTRING',
    payload: payload
  };
};

exports.addSearchForm = addSearchForm;

var addList = function addList(payload) {
  return {
    type: 'ADD_LIST',
    payload: payload
  };
};

exports.addList = addList;

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'ADD_COLUMN':
      return _objectSpread({}, state, {
        columns: [].concat(_toConsumableArray(state.columns), [_objectSpread({
          id: (0, _shortid["default"])()
        }, action.payload)])
      });

    case 'ADD_CARD':
      return _objectSpread({}, state, {
        cards: [].concat(_toConsumableArray(state.cards), [_objectSpread({
          id: (0, _shortid["default"])()
        }, action.payload)])
      });

    case 'ADD_LIST':
      return _objectSpread({}, state, {
        lists: [].concat(_toConsumableArray(state.lists), [_objectSpread({
          id: (0, _shortid["default"])()
        }, action.payload)])
      });

    case 'UPDATE_SEARCHSTRING':
      return _objectSpread({}, state, {
        searchString: action.payload
      });

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(reducer, _initialState["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var _default = store;
exports["default"] = _default;