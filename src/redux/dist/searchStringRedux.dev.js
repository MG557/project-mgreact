"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addSearchForm = void 0;

// action creators
var addSearchForm = function addSearchForm(payload) {
  return {
    type: 'UPDATE_SEARCHSTRING',
    payload: payload
  };
};

exports.addSearchForm = addSearchForm;

var searchStringReducer = function searchStringReducer() {
  var statePart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload;

    default:
      return statePart;
  }
};

var _default = searchStringReducer;
exports["default"] = _default;