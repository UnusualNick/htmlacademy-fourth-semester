import {getRandomInteger, getRandomArrayElement} from '../utils.js';
import {POINT_TYPES} from '../const.js';

const OFFERS = ['Add luggage', 'Switch to comfort', 'Add meal', 'Choose seats', 'Travel by train'];

const generateOffer = (id) => ({
  id,
  title: getRandomArrayElement(OFFERS),
  price: getRandomInteger(10, 100)
});

const generateOffersByType = () => POINT_TYPES.map((type) => ({
  type,
  offers: Array.from({length: getRandomInteger(0, 5)}, (_, index) => generateOffer(index + 1))
}));

const mockOffers = generateOffersByType();

export {mockOffers};
