import { getElementById } from "./helpers.js"
import { moneyInputHandler, moneyButtonHandler } from "./moneyHandler.js";
import { clickButtonPay } from "./buttonPayHandler.js";

const payButtons = ['monoPay', 'googlePay'],
      moneyButtons = ['100', '500', '1000'];

const moneyInputElement = getElementById('money_input'),
      nameInputElement =  getElementById('name_input'),
      commentInputElement = getElementById('comment_input');

moneyButtons.forEach(number => {
    const moneyButtonElement = getElementById(`button_` + number);

    moneyButtonHandler(moneyButtonElement, moneyInputElement, number);
});

payButtons.forEach(button => {
    const payButtonElement = getElementById(button);

    clickButtonPay(payButtonElement,{
        name:nameInputElement,
        comment:commentInputElement,
        money:moneyInputElement
    });
})

moneyInputHandler(moneyInputElement);