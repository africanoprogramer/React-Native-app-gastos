import {DELETE_TRANSACTION, ADD_TRANSACTION} from '../actions/types';

const initialState = {
  transactions: [
    {id: 1, title: 'Baoji', price: -2000},
    {id: 2, title: 'Oreo', price: -800},
    {id: 3, title: 'Paypal', price: 4000},
    {id: 4, title: 'Banco', price: 20000},
    {id: 5, title: 'mama pollo 16', price: -2400},
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== payload,
        ),
      };
    default:
      return state;
  }
};
