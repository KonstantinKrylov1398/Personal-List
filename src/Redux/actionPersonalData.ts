import { ActionCreator } from "redux";
export const PERSONAL_DATA = "PERSONAL_DATA";
type personaldata = {
  type: typeof PERSONAL_DATA;
  array: [];
};
export const PersonalData: ActionCreator<personaldata> = (array) => ({
  type: PERSONAL_DATA,
  array: array,
});
