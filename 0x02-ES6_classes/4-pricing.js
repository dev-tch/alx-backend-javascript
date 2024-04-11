import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency) || typeof amount !== 'number') {
      throw new Error('Invalid input types');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get cuurency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('attribute number must be a number');
    }
    this._amount = amount;
  }

  set cuurency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be  instance of object Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Invalid input types');
    }
    return (amount * conversionRate);
  }
}
