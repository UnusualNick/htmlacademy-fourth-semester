const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {getRandomInteger, getRandomArrayElement, updateItem};
