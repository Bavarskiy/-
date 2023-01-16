const STRING_MAX_LENGTH = 140;

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    alert('Нельзя использовать числа меньше нуля!');
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random()) * (max - min + 1) + min);
};

const getStringLength = (text, STRING_MAX_LENGTH) => {
  if (text.length > STRING_MAX_LENGTH) {
    alert('Текст в комментарии не должен превышать 140 символов, Вы написали ' + (text.length - STRING_MAX_LENGTH) + ' лишних символов');
  }
  return text.length <= STRING_MAX_LENGTH;
};


const getRandomElementArr = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export { getRandomNumber, getRandomElementArr };
