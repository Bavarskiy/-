import { getRandomNumber, getRandomElementArr } from './util.js';
// Раздел 4

const PAGE_MINIATURES_QUANTITY = 25;

const PAGE_MINIATURES_NAMES = [
  'Саша',
  'Вася',
  'Ника',
  'Миша',
  'Влада',
  'Захар',
  'Коля',
];

const pageMiniaturesDescriptions = [
  'Любимое фото',
  'Яркое воспоминание',
  'Хочу сюда вернуться',
  'Делюсь удачной фотографией',
  'Самое любимое место',
  'Надеюсь, Вам понравится',
  'Райское место',
];

const pageMiniaturesLikes = {
  MIN: 15,
  MAX: 200,
};

const pageMiniaturesCommentsQuantity = {
  MIN: 1,
  MAX: 5,
};

const pageMiniaturesAvatarRandomNumber = {
  MIN: 1,
  MAX: 6,
};

const pageMiniaturesRandomUserMessages = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!',
];

const pageMiniatures = [];

const createPageMiniatures = () => {

  for (let i = 0; i < PAGE_MINIATURES_QUANTITY; i++) {
    pageMiniatures.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArr(pageMiniaturesDescriptions),
      likes: getRandomNumber(pageMiniaturesLikes.MIN, pageMiniaturesLikes.MAX),
      comments: createPageMiniaturesComments(),
    });
  }
};

const createPageMiniaturesComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomNumber(pageMiniaturesCommentsQuantity.MIN, pageMiniaturesCommentsQuantity.MAX); i++) {
    comments.push({
      // Ниже магические цифры. Я не стал делать отдельную const для этого id,
      // потому что есть id комментария, и есть id комментатора. В нейминге можно запутаться
      id: getRandomNumber(1, 999),
      avatar: 'img/avatar-' + getRandomNumber(pageMiniaturesAvatarRandomNumber.MIN, pageMiniaturesAvatarRandomNumber.MAX) + '.svg',
      message: getRandomElementArr(pageMiniaturesRandomUserMessages),
      name: getRandomElementArr(PAGE_MINIATURES_NAMES),
    });
  }
  return comments;
};

createPageMiniatures();

export { pageMiniatures, createPageMiniatures };
