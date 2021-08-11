const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM - узлов используй document.createElement().

const ingredientsList = document.querySelector('#ingredients');
const ingredientItems = ingredients.map((el) => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${el}</p>`;
       return li;
    
}    
)
console.log(ingredientItems);
ingredientsList.append(...ingredientItems);