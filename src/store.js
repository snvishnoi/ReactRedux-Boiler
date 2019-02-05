import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default (history, initialState = undefined) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ history }))
    )
  );
