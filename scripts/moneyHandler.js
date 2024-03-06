import { setInnerText, getNumber, setCursorToEnd } from "./helpers.js"

let money = 0;
const maxMoney = 29999;
const moneyInputHandler = (moneyInput) => {
    moneyInput.addEventListener('input', function (){
        money = getNumber(this.innerText);
        setInnerText(this, money, maxMoney);
        setCursorToEnd(this);
    });
}
const moneyButtonHandler = (moneyButton, moneyInput, value) => {
    moneyButton.addEventListener('click', function () {
        money += parseInt(value);
        setInnerText(moneyInput, money, maxMoney);
    });
}
export { moneyInputHandler, moneyButtonHandler };