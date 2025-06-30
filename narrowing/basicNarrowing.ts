function printId(id: number | string) {
    if (typeof id === "string") {
        // id sekarang pasti string
        console.log(id.toUpperCase());
    } else {
        // id sekarang pasti number
        console.log(id);
    }
}
