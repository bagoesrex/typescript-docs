type Status = "pending" | "success" | "error";

let state: Status;
state = "success";  // OK
state = "error";    // OK
// state = "done";  // ❌ Error: not assignable
