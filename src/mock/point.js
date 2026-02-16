import {getRandomInteger, getRandomArrayElement} from '../utils.js';
import {POINT_TYPES} from '../const.js';
import {mockDestinations} from './destination.js';
import {mockOffers} from './offer.js';

const generatePoint = (id) => {
  const type = getRandomArrayElement(POINT_TYPES);
  const destination = getRandomArrayElement(mockDestinations).id;
  const offersByType = mockOffers.find((item) => item.type === type).offers;
  const offerIds = offersByType.length
    ? Array.from({length: getRandomInteger(0, offersByType.length)}, () => getRandomArrayElement(offersByType).id)
    : [];

  // Dedup offerIds
  const uniqueOfferIds = [...new Set(offerIds)];

  const dateFrom = `2019-07-${getRandomInteger(10, 31)}T${String(getRandomInteger(0, 23)).padStart(2, '0')}:${String(getRandomInteger(0, 59)).padStart(2, '0')}:00.000Z`;
  const dateTo = `2019-07-${getRandomInteger(10, 31)}T${String(getRandomInteger(0, 23)).padStart(2, '0')}:${String(getRandomInteger(0, 59)).padStart(2, '0')}:00.000Z`;

  return {
    basePrice: getRandomInteger(100, 1000),
    dateFrom,
    dateTo,
    destination,
    id: String(id),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: uniqueOfferIds,
    type
  };
};

const mockPoints = Array.from({length: 10}, (_, index) => generatePoint(index + 1));

export {mockPoints};
