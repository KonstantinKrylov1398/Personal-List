import { Reducer } from "redux";
import { personaldatatype } from "../components/Form";
import { PERSONAL_DATA } from "./actionPersonalData";
import { SORT_ARRAY } from "./actionSortArray";
import { SET_ARRAY } from "./actionSetArray";
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
  setArray: () => {},
};
export type mystate = {
  sortArray: personaldatatype[];
  personalData: personaldatatype;
  setArray: () => void;
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
    case SET_ARRAY:
      return {
        ...state,
        setArray: action.array,
      };
    default:
      return state;
  }
};
