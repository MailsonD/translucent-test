export function formatYearToString(year) {
    const date = new Date(year);
    const now = new Date();

    const diference = (now.getFullYear() - 1) - date.getFullYear();

    if (diference === 1) {
        return `${diference} year old`;
    }
    if (!diference) {
        return `Released this year`;
    }
    return `${diference} years old`;
}
