import { pageMiniatures } from './data.js'
// заводим переменные под
// шаблон
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// место для вставки готового элемента
const placeForPageMiniatures = document.querySelector('.pictures');

// функция для добавления элементов в DOM-дерево
const renderPageMiniatures = () => {
    const picturesFragment = document.createDocumentFragment();
    
    pageMiniatures.forEach((currentValue) => {
        const randomUserMiniature = pictureTemplate.cloneNode(true);
        randomUserMiniature.querySelector('.picture__img').src = currentValue.url;
        randomUserMiniature.querySelector('.picture__likes').textContent = currentValue.likes;
        randomUserMiniature.querySelector('.picture__comments').textContent = currentValue.comments.length;
        picturesFragment.appendChild(randomUserMiniature);
    })
    placeForPageMiniatures.appendChild(picturesFragment);
}

export { renderPageMiniatures } 
