import actionTypes from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";
import TotalPrice from '../components/TotalPrice'

const initialState = {
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
      const time = new Date();
      const hours = time.getHours();
      const mins = time.getMinutes();
      return {
        moneyList: [
          ...state.moneyList,
          {
            content: action.add.content,
            price: action.add.price,
            time: `${hours} : ${mins}`,
            id: uuidv4(),
          }
        ],
      }
    }
    default:
      return state;
  }
}

export default moneyReducer;