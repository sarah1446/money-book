import actionTypes from "../action/actionTypes";
const initialState = {
  moneyList: [
    { content: 'test product', price: 500, time: '11:11' },
    { content: 'test product2', price: 700, time: '12:10' },
    //{ content: '추가', price: 100, time: '3:14'},

  ],
  totalPrice: 1000
};

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      let arr = state.moneyList.slice();
      return {
        moneyList: arr.push(action),
        total: state.totalPrice + action.price
      }
    }


    default:
      return state;
  }
};

export default moneyReducer;
