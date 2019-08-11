import { takeLatest, put, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { formatDate } from "../../utilities/helpers/dates"
import BankActions, { BankTypes } from '../reducers/banks';
import config from "../../../config";

function* getExchanges() {
  try {
    yield put(BankActions.setLoadingExchange({loading: true}))
    const data = yield call(() =>
      fetch(config.apiURL.getExchanges)
        .then( res => res.json())
    )

    const banks = data.banks.map( bank => ({
      name: bank.name,
      sell: bank.sell['$numberDecimal'],
      buy: bank.buy['$numberDecimal']
    }));

    let updatedAt = formatDate(new Date(data.createdAt))

    yield put(BankActions.setExchanges({banks, updatedAt}))
  } catch (err) {
    yield put(BankActions.setLoadingExchange({loading: false}))
    console.log('getExchanges error', err);
  }
}

function* bankWatcher() {
  yield takeLatest(BankTypes.GET_EXCHANGES, getExchanges);
}

export default [
  bankWatcher,
];
