const convertDaysToSeconds = (days: number) => {
  const secondsPerDay = 24 * 60 * 60;
  return days * secondsPerDay;
};

export default convertDaysToSeconds;
