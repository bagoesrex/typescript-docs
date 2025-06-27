class Box<T> {
    contents: T;
    constructor(value: T) {
        this.contents = value;
    }
}

const stringBox = new Box("Hello");  // Box<string>
const numberBox = new Box(123);      // Box<number>
