// максимальная длина строки по ТЗ
const STRING_MAX_LENGTH = 140;

// получение рандомного числа в заданных приделах
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

// проверка длины строки
const getStringLength = (text, STRING_MAX_LENGTH) => {
  if (text.length > STRING_MAX_LENGTH) {
    alert(`Текст в комментарии не должен превышать ${STRING_MAX_LENGTH} символов, Вы написали ${text.length - STRING_MAX_LENGTH} лишних символа(ов)`);
  }
  return text.length <= STRING_MAX_LENGTH;
};

// получение рандомного элемента массива
const getRandomElementArr = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};


const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc'
};

export { getRandomNumber, getRandomElementArr, isEscEvent };
