import actionTypes from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";
import TotalPrice from '../components/TotalPrice'

const initialState = {
  moneyList: [
    {
      content: '리덕스!!',
      price: 900,
      time: '11:11',
      id: uuidv4(),
    },
    {
      content: 'ㅜㅜ',
      price: 350,
      time: '3:14',
      id: uuidv4(),
    }
  ],
  totalPrice: 0
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
        totalPrice: state.totalPrice + action.add.price
      }
    }

    case actionTypes.DELETE: {
      return {
        moneyList: [
          ...state.moneyList.filter(list => list.id !== action.del.id),
        ],
        totalPrice: state.totalPrice - action.del.price
      }
    }

    case actionTypes.UPDATING_CONTENT: {
      const moneyList = state.moneyList.slice();
      const { content, price, id } = action.updatingContent;
      for (let i = 0; i < moneyList.length; i++) {
        if (moneyList[i].id === id) {
          moneyList[i].content = content;
        }
      }
      return {
        moneyList: [
          ...moneyList,
        ]
      }
    }

    default:
      return state;
  }
}

export default moneyReducer;