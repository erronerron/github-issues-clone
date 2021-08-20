import moment from "moment";

export const formattedDate = (date) => {
  const itemDate = moment(date);
  const DAYS_30 = 30;

  if (moment().diff(moment(date), "days") <= DAYS_30) {
    return itemDate.fromNow();
  }
  if (itemDate.isSame(new Date(), "year")) {
    return itemDate.format("MMM DD");
  }
  return itemDate.format("MMM DD, YYYY");
};
