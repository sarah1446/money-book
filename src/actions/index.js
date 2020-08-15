import { ADD } from "./actionTypes";

export function addList(add) {
  return {
    type: ADD,
    add,
    // add: add
  }
  // 위의 리턴결과 아래처럼 출력됨 
  // {
  //    add: {content: "핫도그", price: "1000"}
  //    type: "ADD"
  // }
}
export default {
  addList
}


