import { all, fork } from 'redux-saga/effects';
import banksSagas from './sagas/banks';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* root() {
  yield all([
    ...forkList(banksSagas),
  ]);
}
