function handle(value: string | number) {
    if (typeof value === "string") {
        value.toUpperCase(); // string
    } else {
        value.toFixed(2); // number
    }
}
