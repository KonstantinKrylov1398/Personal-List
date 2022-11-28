import { parseDate } from "../utils/parseDate";

test("Дата рождения преобразуется в числовое значение", () => {
  expect(parseDate({ birthday: "19.02.2003" }, "birthday")).toBe(1048021200000);
});
