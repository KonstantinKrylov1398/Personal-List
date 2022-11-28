import { ActionCreator } from "redux";

export const SORT_ARRAY = "SORT_ARRAY";
type sortarray = {
  type: typeof SORT_ARRAY;
  array: [];
};

export const SortArray: ActionCreator<sortarray> = (array) => ({
  type: SORT_ARRAY,
  array: array,
});
