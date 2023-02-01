import { pageMiniatures } from './data.js'
// заводим переменную под шаблон
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// заводим переменную под место для вставки готового элемента
const placeForPageMiniatures = document.querySelector('.pictures');

// функция для добавления элементов в DOM-дерево
const renderPageMiniatures = () => {
    const picturesFragment = document.createDocumentFragment();
    
    pageMiniatures.forEach((currentMiniature) => {
        const randomUserMiniature = pictureTemplate.cloneNode(true);
        randomUserMiniature.querySelector('.picture__img').src = currentMiniature.url;
        randomUserMiniature.querySelector('.picture__likes').textContent = currentMiniature.likes;
        randomUserMiniature.querySelector('.picture__comments').textContent = currentMiniature.comments.length;
        picturesFragment.appendChild(randomUserMiniature);
    })
    placeForPageMiniatures.appendChild(picturesFragment);
}

export { renderPageMiniatures } 
