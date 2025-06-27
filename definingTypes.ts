interface User {
    name: string;
    id: number;
}

// const user: User = {
//     name: "Megumin",
//     id: 0,
// }

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1)


function deleteUser(user: User) {
    // ...
}

function getAdminUser(): User {
    //...
    const name = "Test"
    const id = 5
    const objUser = { name, id }

    return objUser
}