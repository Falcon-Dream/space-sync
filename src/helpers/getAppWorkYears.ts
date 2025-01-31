const getAppWorkYears = (startYear: number) => {
    const currentYear = new Date().getFullYear();
    if (currentYear > startYear) {
        return `${startYear} - ${currentYear}`;
    } else if (currentYear === startYear) {
        return `${startYear}`;
    }
};

export default getAppWorkYears;