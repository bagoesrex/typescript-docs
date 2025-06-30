type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark(); // it's a Dog
    } else {
        animal.meow(); // it's a Cat
    }
}
