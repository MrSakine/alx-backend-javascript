export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // eslint-disable-next-line no-underscore-dangle
  get sqft() { return this._sqft; }

  // eslint-disable-next-line no-underscore-dangle
  set sqft(sqft) { this._sqft = sqft; }

  evacuationWarningMessage() {
    return this.sqrt;
  }
}
