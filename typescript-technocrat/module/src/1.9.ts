{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }

    const student1: Student = {
        name: "Rakesh",
        age: 25,
        gender: "male",
        contactNo: "01700000000",
        address: "BD",
    };


    const student2: Student = {
        name: "Raihan",
        age: 35,
        gender: "male",
        address: "Aus",
    };


    const student3: Student = {
        name: "Saihan",
        age: 30,
        gender: "male",
        address: "Aus",
    };


    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = "Hello Universe"
    const isAdmin: IsAdmin = false

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;

    
}