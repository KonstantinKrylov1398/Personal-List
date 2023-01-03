import { ActionCreator } from "redux";
export const SET_ARRAY = "SET_ARRAY";
type setarray = {
  type: typeof SET_ARRAY;
  array: () => void;
};
export const actionSetArray: ActionCreator<setarray> = (array) => ({
  type: SET_ARRAY,
  array: array,
});
