export function validateYear(year: string): boolean {
    const date = new Date(year);
    return date.toString() !== 'Invalid Date';
}

export function validateFullDate(date: Date): boolean {
    const now = new Date();
    return date.getTime() <= now.getTime();
}
