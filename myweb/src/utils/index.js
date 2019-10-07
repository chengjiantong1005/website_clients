import moment from "moment";
let numUnit = ["", "K", "M", "B", "T"];
export const getNumber = (value, index = 0) => {
  if (value > 1000) {
    return getNumber(value / 1000, ++index);
  }
  return Math.round(value * 100) / 100 + numUnit[index];
};

export const formatDateString = (value, format = "MM/YYYY") => {
  return moment(value).format(format);
};
