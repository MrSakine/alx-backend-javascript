import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // eslint-disable-next-line no-underscore-dangle
  get sqft() { return this._sqft; }

  // eslint-disable-next-line no-underscore-dangle
  get floors() { return this._floors; }

  // eslint-disable-next-line no-underscore-dangle
  set sqft(sqft) { this._sqft = sqft; }

  // eslint-disable-next-line no-underscore-dangle
  set floors(floors) { this._floors = floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
