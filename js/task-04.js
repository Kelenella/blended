// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const btnInc = document.querySelector('[data-action="increment"]');

// const btnDec = document.querySelector('[data-action="decrement"]');

// const value = document.querySelector('#value');

// btnInc.addEventListener('click', increment);
// btnDec.addEventListener('click', decrement);

// let total = 0;

// function increment() {
//     total += 1
//     value.textContent = total
// }

// function decrement() {
//     total -= 1
//     value.textContent = total
// }
// +++++++++++++++++++++++++++++++++++++++++++++++
const [btnDec, value, btnInc] = document.querySelector('#counter').children;

const increment = () => value.textContent = +value.textContent + 1 ;
const decrement = () => value.textContent -= 1;

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);