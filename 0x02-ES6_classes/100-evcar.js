import Car from './10-car';

export default class extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return super.cloneCar();
  }
}
