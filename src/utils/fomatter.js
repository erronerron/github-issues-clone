import moment from "moment";

export const formattedDate = (date) => {
  const itemDate = moment(date);
  if (moment().diff(moment(date), "days") <= 30) {
    return itemDate.fromNow();
  }
  if (itemDate.isSame(new Date(), "year")) {
    return itemDate.format("MMM DD");
  }
  return itemDate.format("MMM DD, YYYY");
};
