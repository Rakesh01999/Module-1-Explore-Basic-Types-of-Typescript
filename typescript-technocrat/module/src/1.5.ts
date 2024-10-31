// Reference Type --> Object

const user: {
    readonly company: "PH";    // type --> literal types 
    firstName: string;  // by default : required type
    midName?: string;   // optional type 
    lastName: string;   // by default : required type
    roll: number;       // by default : required type
    student: boolean    // by default : required type
} = {
    company : "PH",
    firstName: "Rakesh",
    lastName: "Biswas",
    roll: 200112,
    student: true
}

// user.company = "prog hero" // Cannot assign to 'company' because it is a read-only property.