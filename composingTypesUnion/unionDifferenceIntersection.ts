type A = { name: string };
type B = { age: number };

type UnionType = A | B;      // Salah satu: A *atau* B
type IntersectionType = A & B; // Harus punya `name` dan `age`
