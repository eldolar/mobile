import { createReducer, createActions } from 'reduxsauce';

const INITIAL_STATE = { exchanges: [], loading: false, updatedAt: '' };

const setExchangesReducer = (state, { payload }) => {
  return {
    loading: false,
    exchanges: payload.banks,
    updatedAt: payload.updatedAt,
  };
};

const setLoadingExchangeReducer = (state, { payload }) => {
  return {
    ...state,
    loading: payload.loading,
  };
};

const { Types, Creators } = createActions({
  getExchanges: null,
  setLoadingExchange: ['payload'],
  setExchanges: ['payload'],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_EXCHANGES]: setExchangesReducer,
  [Types.SET_LOADING_EXCHANGE]: setLoadingExchangeReducer,
});

export const BankTypes = Types;
export default Creators;
