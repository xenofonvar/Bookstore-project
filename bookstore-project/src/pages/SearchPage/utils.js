import Moment from "moment";

const formatDate = (date) => {
  if (date) {
    const formatDate = Moment(date).format("DD-MM-YYYY");
    return formatDate;
  }
  return;
};

export { formatDate };
