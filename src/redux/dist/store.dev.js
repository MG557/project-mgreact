"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _initialState = _interopRequireDefault(require("./initialState"));

var _listsRedux = _interopRequireDefault(require("./listsRedux"));

var _columnsRedux = _interopRequireDefault(require("./columnsRedux"));

var _cardsRedux = _interopRequireDefault(require("./cardsRedux"));

var _searchStringRedux = _interopRequireDefault(require("./searchStringRedux"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import shortid from 'shortid';
//import { strContains } from '../utils/strContains';
//selectors

/*export const getFilteredCards = (state, columnId) => state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));
*/

/*export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));
*/
//export const getAllColumns = (state) => state.columns;
//export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
//export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
//export const getAllLists = (state) => state.lists;
//export const getAllFavoriteCards = (state) => state.cards.filter((card) => card.isFavorite);
// action creators
//export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
//export const addCard = payload => ({ type: 'ADD_CARD', payload});
//export const addSearchForm = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});
//export const addList = payload => ({ type: 'ADD_LIST', payload});
//export const toggleCardFavorite = (payload) => ({type: 'TOGGLE_CARD_FAVORITE', payload});

/*const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }]};
    case 'ADD_LIST':
        return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload }]};
    case 'TOGGLE_CARD_FAVORITE':
        return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    case 'UPDATE_SEARCHSTRING':
     return { ...state, searchString: action.payload };
      
    default:
      return state;
  }
};*/
var subreducers = {
  lists: _listsRedux["default"],
  columns: _columnsRedux["default"],
  cards: _cardsRedux["default"],
  searchString: _searchStringRedux["default"]
};
var reducer = (0, _redux.combineReducers)(subreducers);
/*const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};*/

var store = (0, _redux.createStore)(reducer, _initialState["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var _default = store;
exports["default"] = _default;