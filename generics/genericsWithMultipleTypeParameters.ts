function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

const result = pair("id", 101); // result: [string, number]
