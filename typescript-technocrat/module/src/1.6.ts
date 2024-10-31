// Learning Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number = 10) {
    return num1 + num2;
}

add(20, 43);


const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser = {
    name: 'Rakesh',
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is: ${this.balance + balance}` ;
    },
};

const arr:number[] = [1, 4, 9] ;

const newArray: number[] = arr.map((elem: number):number => elem*elem) ;

