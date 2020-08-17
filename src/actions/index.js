import { ADD, DELETE } from "./actionTypes";

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

export function deleteList(del) {
  return {
    type: DELETE,
    del,
  }
  // {
  //    del: {content: "핫도그", price: "1000"}
  //    type: "DELETE"
  // }
}


export default {
  addList,
  deleteList
}


