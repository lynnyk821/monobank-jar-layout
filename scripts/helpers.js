function getCorrectMoneyFormat(money) {
    return money.toLocaleString().replace(",", " ");
}
const getElementById = (elementId) => document.getElementById(elementId);
const setInnerText = (element, money, maxMoney) => {
    element.innerText = (money < maxMoney) ? getCorrectMoneyFormat(money) : getCorrectMoneyFormat(maxMoney);
}
const getNumber = (inputValue) => {
    const number = parseInt(inputValue.replace(/\D/g, ""));
    return isNaN(number) ? 0 : number;
}
const setCursorToEnd = (element) => {
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(element);
    range.collapse(false);

    selection.removeAllRanges();
    selection.addRange(range);

    element.focus();
}

export { getElementById, setInnerText, getNumber, setCursorToEnd }