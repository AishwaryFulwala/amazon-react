import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
