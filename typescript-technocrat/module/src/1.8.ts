// Destructuring

const userInfo = {
    id: 345,
    name: {
        firstName: "Rakesh",
        LastName: "Biswas"
    },
    contactNo: "01900000000",
    address: "BD"
};

const { contactNo, name: { LastName } } = userInfo;


// array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe']

const [, , bestFriend, ...rest] = myFriends