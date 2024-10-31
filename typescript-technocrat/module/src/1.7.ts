{
    // Spread operator
    // rest operator
    // destructuring



    // learn spread operator

    const bros1: string[] = ['mir', 'mizan', 'firoz']
    const bros2: string[] = ['tanmoy', 'nahid', 'rahat']

    // bros1.push(bros2) // Argument of type 'string[]' is not assignable to parameter of type 'string'.
    bros1.push(...bros2)


    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    }

    const mentors2 = {
        prisma: 'firoz',
        next: 'tanmoy',
        cloud: 'nahid'
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }




    // learn rest operator

    // const greetFriends = (friend1:string, friend2:string, friend3:string) => {
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hir ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    };

    greetFriends('Abul', 'kabul', 'babul')


}