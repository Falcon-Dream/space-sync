// const formatDateTime = (date = new Date()) => {
//   const options: any = {
//     weekday: "short",
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   };

//   const formattedDate = date.toLocaleString("en-GB", options).replace(",", "");

//   const formattedTime = date.toTimeString().split(" ")[0];

//   return {
//     date: formattedDate,
//     time: formattedTime,
//   };
// };

const formatDateTime = (date = new Date()) => {
  const calendar = localStorage.getItem("calendar").toLowerCase();

  const options: any = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
    calendar,
  };

  const formattedDate = new Intl.DateTimeFormat("en-u-ca-" + calendar, options)
    .format(date)
    .replace(/,/, "")
    .replace(/\(.*?\)/g, "");
  const formattedTime = date.toTimeString().split(" ")[0];

  return {
    date: formattedDate.trim(),
    time: formattedTime,
  };
};

// function formatUTCDateTime(date = new Date()) {
//   const calendar = localStorage.getItem("calendar").toLowerCase();

//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const day = days[date.getUTCDay()];
//   const dayOfMonth = String(date.getUTCDate()).padStart(2, "0");
//   const month = months[date.getUTCMonth()];
//   const year = date.getUTCFullYear();

//   const hours = String(date.getUTCHours()).padStart(2, "0");
//   const minutes = String(date.getUTCMinutes()).padStart(2, "0");
//   const seconds = String(date.getUTCSeconds()).padStart(2, "0");

//   return {
//     date: `${day} ${dayOfMonth} ${month} ${year}`,
//     time: `${hours}:${minutes}:${seconds}`,
//   };
// }

const formatUTCDateTime = (date = new Date()) => {
  const calendar = (
    localStorage.getItem("calendar") || "gregory"
  ).toLowerCase();

  const formatter = new Intl.DateTimeFormat("en-u-ca-" + calendar, {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const formatted = parts.reduce((acc: any, part: any) => {
    if (part.type !== "literal") {
      acc[part.type] = part.value || "";
    }
    return acc;
  }, {});

  return {
    date: `${formatted.weekday || ""} ${formatted.day || ""} ${
      formatted.month || ""
    } ${formatted.year || ""}`.trim(),
    time: `${formatted.hour || ""}:${formatted.minute || ""}:${
      formatted.second || ""
    }`.trim(),
  };
};

export { formatDateTime, formatUTCDateTime };
