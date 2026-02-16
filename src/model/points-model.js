import {mockPoints} from '../mock/point.js';
import {mockDestinations} from '../mock/destination.js';
import {mockOffers} from '../mock/offer.js';

export default class PointsModel {
  #points = mockPoints;
  #destinations = mockDestinations;
  #offers = mockOffers;

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
