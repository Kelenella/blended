// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput);
// function onInput(ev)  {
//     if (nameInput.value.trim() === '') {
//         nameOutput.textContent = 'незнакомец'
//     } else {
//         nameOutput.textContent = ev.target.value;
//     }
// }
// Деструктуризация
// function onInput({target:{value}})  {
//     if (value.trim() === '') {
//         nameOutput.textContent = 'незнакомец'
//     } else {
//         nameOutput.textContent = value;
//     }
// }
// Тернарник

function onInput({ target: { value } }) {
    nameOutput.textContent = value.trim() === '' ? 'незнакомец' : value;
}