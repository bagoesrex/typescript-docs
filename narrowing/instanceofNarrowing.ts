function logDate(date: Date | string) {
    if (date instanceof Date) {
        console.log(date.toISOString());
    } else {
        console.log(date.toUpperCase());
    }
}
