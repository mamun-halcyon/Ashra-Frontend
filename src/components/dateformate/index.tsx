export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear() % 100; // Get last two digits of the year

  // Ensure that day and month are two digits
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
};
