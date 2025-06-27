function getFirsts<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirsts<number>([10, 20, 30]); // number
const firstString = getFirsts<string>(["a", "b", "c"]); // string


// Penjelasan:

// <T>: mendefinisikan Generic type parameter T.
// arr: T[]: array berisi item bertipe T.
// : T: hasil fungsi juga bertipe T.