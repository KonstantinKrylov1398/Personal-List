import { Reducer } from "redux";
import { personaldatatype } from "../components/Form";
import { PERSONAL_DATA } from "./actionPersonalData";
import { SORT_ARRAY } from "./actionSortArray";
const myState = {
  sortArray: [],
  personalData: {
    id: 0,
    name: "",
    isArchive: false,
    role: "",
    phone: "",
    birthday: "",
  },
};
export type mystate = {
  sortArray: personaldatatype[];
  personalData: personaldatatype;
};
export const myReducer: Reducer<mystate> = (state = myState, action) => {
  switch (action.type) {
    case SORT_ARRAY:
      return {
        ...state,
        sortArray: action.array,
      };
    case PERSONAL_DATA:
      return {
        ...state,
        personalData: action.array,
      };
    default:
      return state;
  }
};
