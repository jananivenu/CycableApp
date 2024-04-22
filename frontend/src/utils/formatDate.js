export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() возвращает месяц от 0 до 11
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}