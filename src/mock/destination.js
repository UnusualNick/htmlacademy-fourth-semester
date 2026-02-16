import {getRandomInteger, getRandomArrayElement} from '../utils.js';
import {DESTINATIONS, DESCRIPTIONS} from './const.js';

const generatePicture = () => ({
  src: `https://loremflickr.com/248/152?random=${getRandomInteger(1, 1000)}`,
  description: getRandomArrayElement(DESCRIPTIONS)
});

const generateDestination = (id) => ({
  id,
  description: Array.from({length: getRandomInteger(1, 5)}, () => getRandomArrayElement(DESCRIPTIONS)).join(' '),
  name: getRandomArrayElement(DESTINATIONS),
  pictures: Array.from({length: getRandomInteger(1, 5)}, generatePicture)
});

const mockDestinations = Array.from({length: 10}, (_, index) => generateDestination(index + 1));

export {mockDestinations};
