const currentDate = new Date();
const options: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZoneName: "short",
};

export const formattedTimestamp = currentDate.toLocaleString('en-US', options);