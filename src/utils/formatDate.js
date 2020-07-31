export const formatDate = (input) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (!input) {
    return {
      month: "",
      day: "",
      year: ""
    };
  }
  const date = new Date(input);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return {
    month,
    day,
    year,
  };
};
