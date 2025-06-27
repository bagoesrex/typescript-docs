function process(val: string | number) {
    if (typeof val === "string") {
        console.log("Uppercased:", val.toUpperCase());
    } else {
        console.log("Fixed number:", val.toFixed(2));
    }
}
