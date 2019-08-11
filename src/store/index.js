import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import configureReducers from './rootReducer';
import rootSagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(
    configureReducers(),
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
