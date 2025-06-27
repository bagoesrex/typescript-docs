let value: string | number;

function printValue(val: string | number) {
    console.log("Value:", val);
}

printValue("Hello");  // OK
printValue(123);      // OK
// printValue(true);  // ❌ Error: boolean is not assignable
