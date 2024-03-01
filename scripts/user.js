class User {
    constructor(name, comment, money) {
        this.name = name;
        this.comment = comment;
        this.money = parseInt(money.replace(" ", ""));
    }
     printUserInformation() {
        console.log(
            "Name: " + this.name + "\n" +
            "Comment: " + this.comment + "\n" +
            "Money: " + this.money + "\n"
        )
    }
}
export default User;