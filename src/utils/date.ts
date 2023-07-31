export function formatDate(_date: string) {
    const onlyYear = (_date.substring(0, 4));
    const onlyMonth = (_date.substring(5, 7));
    const onlyDay = (_date.substring(8, 10));

    const date = `${onlyDay}-${onlyMonth}-${onlyYear}`
    return date;
}