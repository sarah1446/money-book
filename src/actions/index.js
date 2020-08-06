import { ADD_LIST } from "./actionTypes";

export function addList(add) {
  return {
    type: ADD_LIST,
    add
    //add는 추가된 리스트의 내용, 아래처럼 나옴
    // {
    //   content: this.state.text,
    //   price: this.state.price
    // }
  }
  export default {
    addList
  }
}

// export function deleteList() {
//   return {
//     type: DELETE_LIST
//   }
//   export default {
//     deleteList
//   }
// }

// export function modifyContent() {
//   return {
//     type: MODIFY_CONTENT
//   }
//   export default {
//     modifyContent
//   }
// }

// export function modifyPrice() {
//   return {
//     type: MODIFY_PRICE
//   }
//   export default {
//     modifyPrice
//   }
// }