import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
//import shortid from 'shortid';
//import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

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

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

/*const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};*/



const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;