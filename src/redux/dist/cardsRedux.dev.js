"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.toggleCardFavorite = exports.addCard = exports.getAllFavoriteCards = exports.getFilteredCards = void 0;

var _shortid = _interopRequireDefault(require("shortid"));

var _strContains = require("../utils/strContains");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//selectors
var getFilteredCards = function getFilteredCards(_ref, columnId) {
  var cards = _ref.cards,
      searchString = _ref.searchString;
  return cards.filter(function (card) {
    return card.columnId === columnId && (0, _strContains.strContains)(card.title, searchString);
  });
};

exports.getFilteredCards = getFilteredCards;

var getAllFavoriteCards = function getAllFavoriteCards(state) {
  return state.cards.filter(function (card) {
    return card.isFavorite;
  });
}; // action creators


exports.getAllFavoriteCards = getAllFavoriteCards;

var addCard = function addCard(payload) {
  return {
    type: 'ADD_CARD',
    payload: payload
  };
};

exports.addCard = addCard;

var toggleCardFavorite = function toggleCardFavorite(payload) {
  return {
    type: 'TOGGLE_CARD_FAVORITE',
    payload: payload
  };
};

exports.toggleCardFavorite = toggleCardFavorite;

var cardsReducer = function cardsReducer() {
  var statePart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_CARD':
      return [].concat(_toConsumableArray(statePart), [_objectSpread({}, action.payload, {
        id: (0, _shortid["default"])()
      })]);

    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(function (card) {
        return card.id === action.payload ? _objectSpread({}, card, {
          isFavorite: !card.isFavorite
        }) : card;
      });

    default:
      return statePart;
  }
};

var _default = cardsReducer;
exports["default"] = _default;