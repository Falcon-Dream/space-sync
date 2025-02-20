const formatDateTime = (date = new Date()) => {
  const options: any = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleString("en-GB", options).replace(",", "");

  const formattedTime = date.toTimeString().split(" ")[0]; // Extracts HH:MM:SS from full time string

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

function formatUTCDateTime(date = new Date()) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
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

  const day = days[date.getUTCDay()];
  const dayOfMonth = String(date.getUTCDate()).padStart(2, "0");
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return {
    date: `${day} ${dayOfMonth} ${month} ${year}`,
    time: `${hours}:${minutes}:${seconds}`,
  };
}

export { formatDateTime, formatUTCDateTime };
