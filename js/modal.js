import { renderPageMiniatures, clearPageMiniatures } from './renderMiniatures.js';
import { isEscEvent } from './util.js';
// переменные
const miniaturePopup = document.querySelector('.big-picture');
const miniaturePopupOpenButton = document.querySelector('.picture');
const miniaturePopupCloseButton = miniaturePopup.querySelector('.big-picture__cancel');
const miniaturePopupCommentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

// функция закрытия окна через escape
const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
        evt.preventDefault();
        closeMiniaturePopup();
    };
};

// функция открытия окна
const openMiniaturePopup = () => {
    miniaturePopup.classList.remove('hidden');
    renderPageMiniatures();

    miniaturePopupOpenButton.addEventListener('keydown', onPopupEscKeydown);
};

// функция закрытия окна
const closeMiniaturePopup = () => {
    miniaturePopup.classList.add('hidden');
    // clearPageMiniatures();

    miniaturePopupOpenButton.removeEventListener('keydown', onPopupEscKeydown);
};

miniaturePopupOpenButton.addEventListener('click', () => {
    openMiniaturePopup();
});


miniaturePopupCloseButton.addEventListener('click', () => {
    closeMiniaturePopup();
});

export {  }

/* <template id="comment">
    <li class="social__comment">
        <img class="social__picture" src="{{аватар}}" alt="{{имя комментатора}}" width="35" height="35">
            <p class="social__text">{{ текст комментария }}</p>
    </li>
</template> */

/* <section class="big-picture  overlay  hidden">
    <h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
    <div class="big-picture__preview">

        <!-- Просмотр изображения -->
        <div class="big-picture__img">
            <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600">
        </div>

        <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
        <div class="big-picture__social  social">
            <div class="social__header">
                <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
                    <p class="social__caption">Тестим новую камеру! =)</p>
                    <p class="social__likes">Нравится <span class="likes-count">356</span></p>
            </div> */
// < !--Кнопка для выхода из полноэкранного просмотра изображения-- >
//     <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>