import { photoContent, createPhotoContent }  from './data.js';

const sectionForPhotos = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

// не очень понятно зачем в демострации делать копию объекта, если можно напрямую обратиться к готовому
// const similarPhotoContent = photoContent;

const renderPhotos = () => {

photoContent.forEach(({ url, likes, comments }) => {
    const similarPhoto = pictureTemplate.cloneNode(true);
    similarPhoto.querySelector('.picture__img').src = url;
    similarPhoto.querySelector('.picture__likes').textContent = likes;
    similarPhoto.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.appendChild(similarPhoto);
});

    sectionForPhotos.appendChild(pictureFragment);
};

renderPhotos();
export { renderPhotos }; 













