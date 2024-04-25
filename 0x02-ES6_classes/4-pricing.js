export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // eslint-disable-next-line no-underscore-dangle
  get amount() { return this._amount; }

  // eslint-disable-next-line no-underscore-dangle
  get currency() { return this._currency; }

  set amount(amount) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
  }

  set currency(currency) {
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
