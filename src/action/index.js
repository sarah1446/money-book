import { ADD } from "./actionTypes";

export function addList(add) {
  return {
    type: ADD,
    add
  };
}

export default {
  addList
};
