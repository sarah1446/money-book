import actionTypes from "../actions/actionTypes";

const initialState = {
  // moneyList: [],
  // totalPrice: 0
  moneyList: [
    {
      content: '리덕스!!',
      price: 900
    },
    {
      content: 'ㅜㅜ',
      price: 350
    }
  ],
  totalPrice: 1000
}

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      let arr = state.moneyList.slice();
      return {
        moneyList: arr.concat(action),
        totalPrice: 2000
      }
    }
    default:
      return state;
  }
}

export default moneyReducer;