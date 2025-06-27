function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength("hello");       // ✅ string punya length
getLength([1, 2, 3]);      // ✅ array punya length
// getLength(123);         // ❌ number tidak punya length
