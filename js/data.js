import { getRandomNumber, getRandomElementArr } from './util.js';
// Раздел 4

const PHOTO_QUANTITY = 25;

const NAMES = [
  'Саша',
  'Вася',
  'Ника',
  'Миша',
  'Влада',
  'Захар',
  'Коля',
];

const photoDescriptions = [
  'Любимое фото',
  'Яркое воспоминание',
  'Хочу сюда вернуться',
  'Делюсь удачной фотографией',
  'Самое любимое место',
  'Надеюсь, Вам понравится',
  'Райское место',
];

const PhotoLikes = {
  MIN: 15,
  MAX: 200,
};

const PhotoCommentsQuantity = {
  MIN: 1,
  MAX: 5,
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6,
};

const photoMessages = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!',
];

const photoContent = [];

const createPhotoContent = () => {

  for (let i = 0; i < PHOTO_QUANTITY; i++) {
    photoContent.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArr(photoDescriptions),
      likes: getRandomNumber(PhotoLikes.MIN, PhotoLikes.MAX),
      comments: createComments(),
    });
  }
};

const createComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomNumber(PhotoCommentsQuantity.MIN, PhotoCommentsQuantity.MAX); i++) {
    comments.push({
      // Ниже магические цифры. Я не стал делать отдельную const для этого id,
      // потому что есть id комментария, и есть id комментатора. В нейминге можно запутаться
      id: getRandomNumber(1, 999),
      avatar: 'img/avatar-' + getRandomNumber(AvatarNumber.MIN, AvatarNumber.MAX) + '.svg',
      message: getRandomElementArr(photoMessages),
      name: getRandomElementArr(NAMES),
    });
  }
  return comments;
};

createPhotoContent();

export { photoContent, createPhotoContent };
