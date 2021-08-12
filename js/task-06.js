// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputRef = document.querySelector('#validation-input');

function toggleClass(add, rem) {
    inputRef.classList.remove(rem);
    inputRef.classList.add(add);
}

// const onInput = () => {
//     if (inputRef.value.length === +inputRef.dataset.length) {
//         toggleClass('valid', 'invalid')
//     } else {
//          toggleClass('invalid', 'valid')
//     }
// }
// тернарник

// const onInput = () => {
//     inputRef.value.length === +inputRef.dataset.length ? toggleClass('valid', 'invalid') : toggleClass('invalid', 'valid')
// }

// inputRef.addEventListener('blur', onInput);

// Деструктуризация
const onInput = ({target:{value, dataset}}) => {
    value.length === +dataset.length ? toggleClass('valid', 'invalid') : toggleClass('invalid', 'valid')
}

inputRef.addEventListener('blur', onInput);
