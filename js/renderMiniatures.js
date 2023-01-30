import { pageMiniatures } from './data.js'

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const placeForPageMiniatures = document.querySelector('.pictures');


const renderPageMiniatures = () => {
    const picturesFragment = document.createDocumentFragment();
    
    pageMiniatures.forEach((miniature) => {
        const randomUserMiniature = pictureTemplate.cloneNode(true);
        randomUserMiniature.querySelector('.picture__img').src = miniature.url;
        randomUserMiniature.querySelector('.picture__likes').textContent = miniature.likes;
        randomUserMiniature.querySelector('.picture__comments').textContent = miniature.comments.length;
        picturesFragment.appendChild(randomUserMiniature);
    })
    placeForPageMiniatures.appendChild(picturesFragment);
}

export { renderPageMiniatures } 
