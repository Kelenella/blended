const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// 1) Через map

const ulGallery = document.querySelector('#gallery');
const galleryEl = ({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="480"></li>`; 
const markup = images.map(galleryEl).join('');
ulGallery.insertAdjacentHTML("beforeend",markup)

// 2) Через reduce
// const ulGallery = document.querySelector('#gallery');
// const galleryEl = (acc, { url, alt }) => acc + `<li><img src="${url}" alt="${alt}" width="480"></li>`;
// const markup = images.reduce(galleryEl, '');
// ulGallery.insertAdjacentHTML("beforeend",markup)
