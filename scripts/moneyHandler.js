let money = 0;
const maxMoney = 29999;
function getCorrectMoneyFormat(money) {
    return money.toLocaleString().replace(",", " ");
}
function setInnerText(element, money, maxMoney){
    element.innerText = (money < maxMoney) ? getCorrectMoneyFormat(money) : getCorrectMoneyFormat(maxMoney);
}
function getNumber(inputValue){
    const number = parseInt(inputValue.replace(/\D/g, ""));
    return isNaN(number) ? 0 : number;
}
function setCursorToEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(element);
    range.collapse(false);

    selection.removeAllRanges();
    selection.addRange(range);

    element.focus();
}
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