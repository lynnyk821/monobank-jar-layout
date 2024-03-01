import User from "./user.js";
import UserList from "./userList.js";

let users = new UserList();

const clickButtonPay = (button, userElements) => {
    button.addEventListener('click',  function (){
        users.addUser(new User(
            userElements.name.value,
            userElements.comment.value,
            userElements.money.innerText
        ));
        users.printAllUsersInformation();
    });
}
export { clickButtonPay }