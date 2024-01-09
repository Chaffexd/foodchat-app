export const formattedTimestamp = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  };

  return currentDate.toLocaleString("en-US", options);
};
