import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import ReduxThunk  from 'redux-thunk';
import reducer from './reducers/';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(ReduxThunk, routerMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
