export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // eslint-disable-next-line no-underscore-dangle
  get code() { return this._code; }

  // eslint-disable-next-line no-underscore-dangle
  get name() { return this._name; }

  set code(code) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
  }

  set name(name) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this.name} (${this.code})`;
  }
}
