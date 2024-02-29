const message = (information) => {
    console.log(
        "Name: " + information.name.value + "\n" +
        "Comment: " + information.comment.value + "\n" +
        "Money: " + information.money.innerText + "\n"
    )
}
const clickButtonPay = (button, information) => {
    button.addEventListener('click',  function (){
        message(information);
    });
}
export { clickButtonPay }