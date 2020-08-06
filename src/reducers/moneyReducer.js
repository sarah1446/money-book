import actionTypes from "../actions/actionTypes";

const initialState = {
  // moneyList: [],
  // totalPrice: 0
  moneyList: [{ content: '리덕스!!', price: 900 }],
  totalPrice: 1000
}

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LIST: {
      return [
        ...state,
        {
          // content: '수동으로하고이따',
          // price: 770
          content: action.content,
          price: action.price
        }
      ]
    }
    default: return state;
  }
}

export default moneyReducer;