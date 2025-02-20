const getSecondsSinceReference = (
  referenceYear: number,
  referenceMonth: number,
  referenceDay: number
) => {
  const referenceDate: any = new Date(
    Date.UTC(referenceYear, referenceMonth - 1, referenceDay, 0, 0, 0)
  );

  const targetDate: any = new Date();

  const differenceInMs = targetDate - referenceDate;

  const differenceInSeconds = Math.floor(differenceInMs / 1000);

  return differenceInSeconds;
};

export default getSecondsSinceReference;
