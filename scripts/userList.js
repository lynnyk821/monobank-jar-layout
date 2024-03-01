class UserList {
    constructor() {
        this.users = [];
    }
    getIndexOfUser(user) {
        return this.users.findIndex(u => u.name === user.name);
    }
    addUser(user) {
        const index = this.getIndexOfUser(user);

        if(index === -1) {
            this.users.push(user);
        } else {
            this.users[index].money += user.money;
        }
    }
    printAllUsersInformation(){
        console.clear();
        this.users.forEach(user => {
            user.printUserInformation();
        })
    }
}
export default UserList;